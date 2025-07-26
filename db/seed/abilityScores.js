import db from '../client.js';

export async function seedAbilityScores() {
  try {
    await db.query('TRUNCATE ability_scores RESTART IDENTITY');

    await db.query(`
      INSERT INTO ability_scores (index, name, description) VALUES
      (
        'strength', 'Strength',
        ARRAY[
          'Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force.'
        ]
      ),
      (
        'dexterity', 'Dexterity',
        ARRAY[
          'Dexterity measures agility, reflexes, and balance.'
        ]
      ),
      (
        'constitution', 'Constitution',
        ARRAY[
          'Constitution measures health, stamina, and vital force.'
        ]
      ),
      (
        'intelligence', 'Intelligence',
        ARRAY[
          'Intelligence measures mental acuity, accuracy of recall, and the ability to reason.'
        ]
      ),
      (
        'wisdom', 'Wisdom',
        ARRAY[
          'Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.'
        ]
      ),
      (
        'charisma', 'Charisma',
        ARRAY[
          'Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence.'
        ]
      );
    `);

    console.log('✅ ability_scores table seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding ability_scores:', error);
  }
}
