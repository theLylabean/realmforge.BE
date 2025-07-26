import db from '../client.js';

export async function seedPackItems() {
  try {
    await db.query('TRUNCATE pack_items RESTART IDENTITY CASCADE');

    const packs = await db.query(`SELECT id, name FROM equipment_packs`);
    const items = await db.query(`SELECT id, index FROM equipment_list`);

    const itemMap = Object.fromEntries(items.rows.map(r => [r.index, r.id]));

    // Explorer's Pack content
    const explorer = packs.rows.find(p => p.name === 'Explorer\'s Pack').id;
    const dungeoneer = packs.rows.find(p => p.name === 'Dungeoneer\'s Pack').id;

    await db.query(`
      INSERT INTO pack_items (pack_id, item_id, quantity) VALUES
        (${explorer}, ${itemMap['backpack']}, 1),
        (${explorer}, ${itemMap['bedroll']}, 1),
        (${explorer}, ${itemMap['tinderbox']}, 1),
        (${explorer}, ${itemMap['torch']}, 10),
        (${explorer}, ${itemMap['rations']}, 10),
        (${explorer}, ${itemMap['waterskin']}, 1),
        (${explorer}, ${itemMap['rope-hempen-50-ft']}, 1),
        (${dungeoneer}, ${itemMap['backpack']}, 1),
        (${dungeoneer}, ${itemMap['crowbar']}, 1),
        (${dungeoneer}, ${itemMap['hammer']}, 1),
        (${dungeoneer}, ${itemMap['pitons']}, 10),
        (${dungeoneer}, ${itemMap['hooded-lantern']}, 1),
        (${dungeoneer}, ${itemMap['torch']}, 10),
        (${dungeoneer}, ${itemMap['rations']}, 10),
        (${dungeoneer}, ${itemMap['waterskin']}, 1),
        (${dungeoneer}, ${itemMap['rope-hempen-50-ft']}, 1)
    `);

    console.log('✅ pack_items seeded');
  } catch (e) {
    console.error('❌ seedPackItems error:', e);
  }
}