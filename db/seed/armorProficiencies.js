import db from '../client.js';

export async function seedArmorProficiencies() {
  try {
    const armorProficiencies = [
      {
        index: 'light-armor',
        name: 'Light Armor',
        type: 'Armor'
      },
      {
        index: 'medium-armor',
        name: 'Medium Armor',
        type: 'Armor'
      },
      {
        index: 'heavy-armor',
        name: 'Heavy Armor',
        type: 'Armor'
      },
      {
        index: 'shields',
        name: 'Shields',
        type: 'Armor'
      }
    ];

    for (const prof of armorProficiencies) {
      await db.query(
        `INSERT INTO proficiencies (index, name, type)
         VALUES ($1, $2, $3)
         ON CONFLICT (index) DO NOTHING`,
        [prof.index, prof.name, prof.type]
      );
    }
    console.log('✅ Armor proficiencies seeded successfully.');
  } catch (error) {
    console.error('❌ Error seeding armor proficiencies:', error);
  }
}