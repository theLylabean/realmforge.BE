import db from '../client.js';

export async function seedCharClass() {
  try {
    await db.query('TRUNCATE char_class RESTART IDENTITY CASCADE');

    const classes = [
      {
        index: 'barbarian',
        name: 'Barbarian',
        hit_die: 12,
        proficiencies: ['light-armor', 'medium-armor', 'shields', 'simple-weapons', 'martial-weapons'],
        saving_throws: ['strength', 'constitution'],
        description: [
          'A fierce warrior of primitive background who can enter a battle rage.',
          'Barbarians rely on sheer power and instinct to overcome obstacles.'
        ]
      },
      {
        index: 'bard',
        name: 'Bard',
        hit_die: 8,
        proficiencies: ['light-armor', 'simple-weapons', 'hand-crossbows', 'longswords', 'rapiers', 'shortswords'],
        saving_throws: ['dexterity', 'charisma'],
        description: [
          'An inspiring magician whose power echoes the music of creation.',
          'Bards use their talents to enchant, inspire, and confuse foes.'
        ]
      },
      {
        index: 'cleric',
        name: 'Cleric',
        hit_die: 8,
        proficiencies: ['light-armor', 'medium-armor', 'shields', 'simple-weapons'],
        saving_throws: ['wisdom', 'charisma'],
        description: [
          'A priestly champion who wields divine magic in service of a higher power.'
        ]
      },
      {
        index: 'druid',
        name: 'Druid',
        hit_die: 8,
        proficiencies: ['light-armor', 'medium-armor', 'shields', 'clubs', 'daggers', 'darts', 'javelins', 'maces', 'quarterstaffs', 'scimitars', 'sickles', 'slings', 'spears'],
        saving_throws: ['intelligence', 'wisdom'],
        description: [
          'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.'
        ]
      },
      {
        index: 'fighter',
        name: 'Fighter',
        hit_die: 10,
        proficiencies: ['all-armor', 'shields', 'simple-weapons', 'martial-weapons'],
        saving_throws: ['strength', 'constitution'],
        description: [
          'A master of martial combat, skilled with a variety of weapons and armor.'
        ]
      },
      {
        index: 'monk',
        name: 'Monk',
        hit_die: 8,
        proficiencies: ['simple-weapons', 'shortswords'],
        saving_throws: ['strength', 'dexterity'],
        description: [
          'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.'
        ]
      },
      {
        index: 'paladin',
        name: 'Paladin',
        hit_die: 10,
        proficiencies: ['all-armor', 'shields', 'simple-weapons', 'martial-weapons'],
        saving_throws: ['wisdom', 'charisma'],
        description: [
          'A holy warrior bound to a sacred oath.'
        ]
      },
      {
        index: 'ranger',
        name: 'Ranger',
        hit_die: 10,
        proficiencies: ['light-armor', 'medium-armor', 'shields', 'simple-weapons', 'martial-weapons'],
        saving_throws: ['strength', 'dexterity'],
        description: [
          'A warrior who combats threats on the edges of civilization.'
        ]
      },
      {
        index: 'rogue',
        name: 'Rogue',
        hit_die: 8,
        proficiencies: ['light-armor', 'simple-weapons', 'hand-crossbows', 'longswords', 'rapiers', 'shortswords'],
        saving_throws: ['dexterity', 'intelligence'],
        description: [
          'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.'
        ]
      },
      {
        index: 'sorcerer',
        name: 'Sorcerer',
        hit_die: 6,
        proficiencies: ['daggers', 'darts', 'slings', 'quarterstaffs', 'light-crossbows'],
        saving_throws: ['constitution', 'charisma'],
        description: [
          'A spellcaster who draws on inherent magic from a gift or bloodline.'
        ]
      },
      {
        index: 'warlock',
        name: 'Warlock',
        hit_die: 8,
        proficiencies: ['light-armor', 'simple-weapons'],
        saving_throws: ['wisdom', 'charisma'],
        description: [
          'A wielder of magic that is derived from a bargain with an extraplanar entity.'
        ]
      },
      {
        index: 'wizard',
        name: 'Wizard',
        hit_die: 6,
        proficiencies: ['daggers', 'darts', 'slings', 'quarterstaffs', 'light-crossbows'],
        saving_throws: ['intelligence', 'wisdom'],
        description: [
          'A scholarly magic-user capable of manipulating the structures of reality.'
        ]
      }
    ];

    for (const cls of classes) {
      const result = await db.query(`
        INSERT INTO char_class (index, name, hit_die, description)
        VALUES ($1, $2, $3, $4)
        RETURNING id;
      `, [cls.index, cls.name, cls.hit_die, cls.description]);

      const classId = result.rows[0].id;

      for (const prof of cls.proficiencies) {
        await db.query(`
          INSERT INTO class_proficiencies (class_id, proficiency_index)
          VALUES ($1, $2);
        `, [classId, prof]);
      }

      for (const save of cls.saving_throws) {
        await db.query(`
          INSERT INTO class_proficiencies (class_id, proficiency_index)
          VALUES ($1, $2);
        `, [classId, `saving-throw-${save}`]);
      }
    }

    console.log('✅ char_class seed complete!');
  } catch (err) {
    console.error('❌ seedCharClass error:', err);
  }
}
