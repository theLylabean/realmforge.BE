import db from '../client.js';

export async function seedLanguages() {
  try {
    await db.query(`TRUNCATE languages RESTART IDENTITY CASCADE`);

    await db.query(`
      INSERT INTO languages (name, type, script, typical_speakers) VALUES
      ('Common', 'Standard', 'Common', ARRAY['Humans']),
      ('Dwarvish', 'Standard', 'Dwarvish', ARRAY['Dwarves']),
      ('Elvish', 'Standard', 'Elvish', ARRAY['Elves']),
      ('Giant', 'Standard', 'Dwarvish', ARRAY['Giants', 'Ogres']),
      ('Gnomish', 'Standard', 'Dwarvish', ARRAY['Gnomes']),
      ('Goblin', 'Standard', 'Dwarvish', ARRAY['Goblins', 'Hobgoblins', 'Bugbears']),
      ('Halfling', 'Standard', 'Common', ARRAY['Halflings']),
      ('Orc', 'Standard', 'Dwarvish', ARRAY['Orcs']),
      ('Abyssal', 'Exotic', 'Infernal', ARRAY['Demons']),
      ('Celestial', 'Exotic', 'Celestial', ARRAY['Celestials']),
      ('Draconic', 'Exotic', 'Draconic', ARRAY['Dragons', 'Dragonborn']),
      ('Deep Speech', 'Exotic', NULL, ARRAY['Mind Flayers', 'Beholders']),
      ('Infernal', 'Exotic', 'Infernal', ARRAY['Devils']),
      ('Primordial', 'Exotic', 'Dwarvish', ARRAY['Elementals']),
      ('Sylvan', 'Exotic', 'Elvish', ARRAY['Fey']),
      ('Undercommon', 'Exotic', 'Elvish', ARRAY['Underdark dwellers']),
      ('Aquan', 'Dialect', 'Elvish', ARRAY['Water Elementals']),
      ('Auran', 'Dialect', 'Draconic', ARRAY['Air Elementals']),
      ('Ignan', 'Dialect', 'Draconic', ARRAY['Fire Elementals']),
      ('Terran', 'Dialect', 'Dwarvish', ARRAY['Earth Elementals']);
    `);
    console.log('✅ Seeded all languages!');
  } catch (err) {
    console.error('❌ Error seeding languages:', err);
  }
}
