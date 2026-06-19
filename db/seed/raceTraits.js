import db from '../db/client.js';

export async function seedRaceTraits() {
  try {
    await db.query('TRUNCATE race_traits RESTART IDENTITY CASCADE');

    // Fetch all races and traits so we can map names -> IDs
    const { rows: raceRows } = await db.query('SELECT id, index FROM races');
    const { rows: traitRows } = await db.query('SELECT id, index FROM traits');

    const raceMap = Object.fromEntries(raceRows.map(r => [r.index, r.id]));
    const traitMap = Object.fromEntries(traitRows.map(t => [t.index, t.id]));

    // Define the mapping in terms of race.slug -> [trait.slugs]
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

    for (const [raceIndex, traitList] of Object.entries(assignments)) {
      const raceId = raceMap[raceIndex];
      if (!raceId) {
        console.warn(`⚠️ Race not found: ${raceIndex}`);
        continue;
      }

      for (const traitIndex of traitList) {
        const traitId = traitMap[traitIndex];
        if (!traitId) {
          console.warn(`⚠️ Trait not found: ${traitIndex}`);
          continue;
        }

        await db.query(
          'INSERT INTO race_traits (race_id, trait_id) VALUES ($1, $2)',
          [raceId, traitId]
        );
      }
    }

    console.log('✅ race_traits seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding race_traits:', err);
  }
}

seedRaceTraits();