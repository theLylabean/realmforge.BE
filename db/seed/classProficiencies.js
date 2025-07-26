import db from '../client.js';

export async function seedClassProficiencies() {
  try {
    await db.query('TRUNCATE class_proficiencies RESTART IDENTITY CASCADE');

    const classProficiencies = {
      barbarian: [
        'light-armor', 'medium-armor', 'shields',
        'simple-weapons', 'martial-weapons',
        'saving-throw-strength', 'saving-throw-constitution'
      ],
      bard: [
        'light-armor',
        'simple-weapons', 'hand-crossbows', 'longswords', 'rapiers', 'shortswords',
        'saving-throw-dexterity', 'saving-throw-charisma'
      ],
      cleric: [
        'light-armor', 'medium-armor', 'shields', 'simple-weapons',
        'saving-throw-wisdom', 'saving-throw-charisma'
      ],
      druid: [
        'light-armor', 'medium-armor', 'shields',
        'clubs', 'daggers', 'darts', 'javelins', 'maces',
        'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears',
        'saving-throw-intelligence', 'saving-throw-wisdom'
      ],
      fighter: [
        'all-armor', 'shields', 'simple-weapons', 'martial-weapons',
        'saving-throw-strength', 'saving-throw-constitution'
      ],
      monk: [
        'simple-weapons', 'shortswords',
        'saving-throw-strength', 'saving-throw-dexterity'
      ],
      paladin: [
        'all-armor', 'shields', 'simple-weapons', 'martial-weapons',
        'saving-throw-wisdom', 'saving-throw-charisma'
      ],
      ranger: [
        'light-armor', 'medium-armor', 'shields',
        'simple-weapons', 'martial-weapons',
        'saving-throw-strength', 'saving-throw-dexterity'
      ],
      rogue: [
        'light-armor',
        'simple-weapons', 'hand-crossbows', 'longswords', 'rapiers', 'shortswords',
        'saving-throw-dexterity', 'saving-throw-intelligence'
      ],
      sorcerer: [
        'daggers', 'darts', 'slings', 'quarterstaffs', 'light-crossbows',
        'saving-throw-constitution', 'saving-throw-charisma'
      ],
      warlock: [
        'light-armor', 'simple-weapons',
        'saving-throw-wisdom', 'saving-throw-charisma'
      ],
      wizard: [
        'daggers', 'darts', 'slings', 'quarterstaffs', 'light-crossbows',
        'saving-throw-intelligence', 'saving-throw-wisdom'
      ]
    };

    for (const [classIndex, proficiencies] of Object.entries(classProficiencies)) {
      const { rows: [cls] } = await db.query(
        'SELECT id FROM char_class WHERE index = $1',
        [classIndex]
      );

      if (!cls) {
        console.warn(`⚠️  Class "${classIndex}" not found in database.`);
        continue;
      }

      for (const prof of proficiencies) {
        await db.query(
          'INSERT INTO class_proficiencies (class_id, proficiency_index) VALUES ($1, $2)',
          [cls.id, prof]
        );
      }
    }

    console.log('✅ class_proficiencies seed complete!');
  } catch (err) {
    console.error('❌ seedClassProficiencies error:', err);
  }
}