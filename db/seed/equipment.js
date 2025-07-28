import db from '../client.js';

export async function seedEquipmentList() {
  try {
    await db.query('TRUNCATE equipment_list RESTART IDENTITY CASCADE');

    // Get relevant category IDs
    const categories = {};
    const categoryNames = ['adventuring-gear', 'equipment-packs'];
    for (const index of categoryNames) {
      const { rows } = await db.query(`SELECT id FROM equipment_categories WHERE index = $1`, [index]);
      categories[index] = rows[0]?.id;
    }

    // Insert general gear and packs only (no weapons, armor, or tools)
    await db.query(`
      INSERT INTO equipment_list (index, name, category_id, weight, cost, description) VALUES
      ('backpack', 'Backpack', ${categories['adventuring-gear']}, 5, '2 gp',
        ARRAY['Standard container for gear']),
      ('bedroll', 'Bedroll', ${categories['adventuring-gear']}, 5, '1 gp',
        ARRAY['Sleeping gear']),
      ('tinderbox', 'Tinderbox', ${categories['adventuring-gear']}, 1, '0.5 gp',
        ARRAY['Used to light fires']),
      ('waterskin', 'Waterskin', ${categories['adventuring-gear']}, 5, '0.2 gp',
        ARRAY['Holds up to 4 pints of liquid']),
      ('rations', 'Rations (1 day)', ${categories['adventuring-gear']}, 2, '0.5 gp',
        ARRAY['Preserved food for 1 day']),
      ('explorers-pack', 'Explorer\'s Pack', ${categories['equipment-packs']}, 59, '10 gp',
        ARRAY['Backpack, bedroll, mess kit, tinderbox, 10 torches, 10 days rations, waterskin, 50 ft rope']),
      ('dungeoneers-pack', 'Dungeoneer\'s Pack', ${categories['equipment-packs']}, 61, '12 gp',
        ARRAY['Backpack, crowbar, hammer, pitons, torches, rations, waterskin, rope'])
    `);
    console.log('✅ equipment_list (non-duplicate items) seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding equipment_list:', error);
  }
}