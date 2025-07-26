import db from '../client.js';

export async function seedCharacters() {
  try {
    await db.query('TRUNCATE characters RESTART IDENTITY');

    await db.query(`
      INSERT INTO characters (
        user_id, name, age, alignment, appearance,
        faction, deity, race, char_class, ability_scores,
        hometown, backstory, motivation, spells, equipment
      )
      VALUES (
        1, 'Lyra Thalgruun', '22', 'Chaotic Good',
        'Tall, silver-scaled Dragonborn with glowing violet eyes',
        'Harpers', 'Bahamut', 'Dragonborn', 'Sorcerer',
        '{
          "strength": 10,
          "dexterity": 14,
          "constitution": 13,
          "intelligence": 12,
          "wisdom": 11,
          "charisma": 18
        }',
        'Shiverclaw Hold',
        'Exiled from her clan, Lyra wanders in search of redemption.',
        'To prove her worth and find a new home.',
        ARRAY['Magic Missile', 'Shield'],
        ARRAY['Wand', 'Traveler\'s Clothes', 'Potion of Healing']
      );
    `);

    console.log('✅ characters table seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding characters:', error);
  }
}
