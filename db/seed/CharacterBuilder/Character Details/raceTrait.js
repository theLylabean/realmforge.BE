import db from '../db/client.js';

export async function seedRaceTrait() {
  try {
    await db.query('TRUNCATE species_traits RESTART IDENTITY CASCADE');

    // Fetch all species and traits so we can map names -> IDs
    const { rows: speciesRows } = await db.query('SELECT id, index FROM species');
    const { rows: traitRows } = await db.query('SELECT id, index FROM traits');

    const speciesMap = Object.fromEntries(speciesRows.map(r => [r.index, r.id]));
    const traitMap = Object.fromEntries(traitRows.map(t => [t.index, t.id]));

    // Define the mapping in terms of species.slug -> [trait.slugs]
    const assignments = {
      dragonborn: ['draconic-ancestry', 'breath-weapon', 'damage-resistance'],
      dwarf: ['darkvision', 'dwarven-resilience', 'dwarven-combat-training', 'tool-proficiency', 'stonecunning'],
      elf: ['darkvision', 'keen-senses', 'fey-ancestry', 'trance'],
      gnome: ['darkvision', 'gnome-cunning'],
      'half-elf': ['darkvision', 'fey-ancestry', 'skill-versatility'],
      'half-orc': ['darkvision', 'menacing', 'relentless-endurance', 'savage-attacks'],
      halfling: ['lucky', 'brave', 'halfling-nimbleness'],
      // human: [] // SRD humans don’t have unique racial traits
      tiefling: ['darkvision', 'hellish-resistance', 'infernal-legacy']
    };

    for (const [speciesIndex, traitList] of Object.entries(assignments)) {
      const speciesId = speciesMap[speciesIndex];
      if (!speciesId) {
        console.warn(`⚠️ Race not found: ${speciesIndex}`);
        continue;
      }

      for (const traitIndex of traitList) {
        const traitId = traitMap[traitIndex];
        if (!traitId) {
          console.warn(`⚠️ Trait not found: ${traitIndex}`);
          continue;
        }

        await db.query(
          'INSERT INTO species_traits (species_id, trait_id) VALUES ($1, $2)',
          [speciesId, traitId]
        );
      }
    }

    console.log('✅ species_traits seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding species_traits:', err);
  }
}

seedRaceTrait();