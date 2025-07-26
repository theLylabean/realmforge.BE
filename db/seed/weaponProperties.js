import db from '../client.js';

export async function seedWeaponProperties() {
  try {
    await db.query('TRUNCATE weapon_properties RESTART IDENTITY CASCADE');
    await db.query(`
      INSERT INTO weapon_properties (name) VALUES
        ('Finesse'),
        ('Light'),
        ('Thrown'),
        ('Versatile'),
        ('Two-Handed'),
        ('Heavy'),
        ('Range'),
        ('Loading'),
        ('Special')
    `);
    console.log('✅ weapon_properties seeded!');
  } catch (err) {
    console.error(err);
  }
}