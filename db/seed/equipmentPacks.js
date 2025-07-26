import db from '../client.js';

export async function seedEquipmentPacks() {
  try {
    await db.query('TRUNCATE equipment_packs RESTART IDENTITY CASCADE');
    await db.query(`
      INSERT INTO equipment_packs (name, description) VALUES
        ('Explorer\'s Pack', 'Includes backpack, bedroll, mess kit, tinderbox, 10 torches, 10 days rations, waterskin, 50 ft rope'),
        ('Dungeoneer\'s Pack', 'Includes backpack, crowbar, hammer, pitons, hooded lantern, 10 torches, rations, waterskin, 50 ft rope')
    `);
    console.log('✅ equipment_packs seeded');
  } catch (e) {
    console.error('❌ seedEquipmentPacks error:', e);
  }
}