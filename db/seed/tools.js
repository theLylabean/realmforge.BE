import db from '../client.js';

export async function seedTools() {
  try {
    await db.query('TRUNCATE tools RESTART IDENTITY CASCADE');
    const toolCategory = (await db.query(`SELECT id FROM equipment_categories WHERE index = 'tools'`)).rows[0].id;
    const inserted = await db.query(`
      INSERT INTO equipment_list (index, name, category_id, weight, cost, description) VALUES
      ('thieves-tools','Thieves\\' Tools', ${toolCategory}, 1, '25 gp', ARRAY['Lockpicking kit','Dexterity Ability Tool']),
      ('healers-kit','Healer\\'s Kit', ${toolCategory}, 3, '5 gp', ARRAY['Stabilize a creature at 0 HP'])
      RETURNING id
    `);
    const [tkId, hkId] = inserted.rows.map(r=>r.id);
    await db.query(`
      INSERT INTO tools (equipment_id, tool_type)
      VALUES (${tkId}, 'Artisan\'s Tools'), (${hkId}, 'Healing Kit')
    `);
    console.log('✅ tools seeded!');
  } catch (err) { console.error(err); }
}