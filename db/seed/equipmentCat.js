import db from '../client.js';

export async function seedEquipmentCategories() {
  try {
    await db.query('TRUNCATE equipment_categories RESTART IDENTITY CASCADE');

    await db.query(`
      INSERT INTO equipment_categories (index, name, description) VALUES
      ('adventuring-gear', 'Adventuring Gear', 'Essential travel and survival gear like rope, rations, and torches.'),
      ('armor', 'Armor', 'Protective clothing used to reduce incoming damage in combat.'),
      ('weapons', 'Weapons', 'Melee and ranged arms used to deal damage during encounters.'),
      ('tools', 'Tools', 'Artisan tools, musical instruments, and kits for specialized tasks.'),
      ('mounts-vehicles', 'Mounts and Vehicles', 'Creatures and conveyances used for travel.'),
      ('trade-goods', 'Trade Goods', 'Barterable materials like spices, metals, and textiles.'),
      ('food-expenses', 'Food and Expenses', 'Consumables, meals, and lodging while traveling.'),
      ('equipment-packs', 'Equipment Packs', 'Pre-assembled sets of adventuring gear.'),
      ('magic-items', 'Magic Items', 'Enchanted objects with special properties or powers.'),
      ('treasure', 'Treasure', 'Gems, valuables, and hoarded loot worth coin.');
    `);
    console.log('✅ equipment_categories seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding equipment_categories:', err);
  }
}
