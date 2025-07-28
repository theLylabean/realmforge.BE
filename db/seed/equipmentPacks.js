import db from '../client.js';

export async function seedEquipmentPacks() {
  try {
    await db.query('TRUNCATE equipment_packs RESTART IDENTITY CASCADE');

    await db.query(`
      INSERT INTO equipment_packs (index, name, category, description) VALUES
      ('burglar-pack', 'Burglar\'s Pack', 'Pack',
        ARRAY[
          'Includes: a backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days of rations, a tinderbox, and a waterskin.',
          'The pack also has 50 feet of hempen rope strapped to the side of it.'
        ]
      ),
      ('diplomats-pack', 'Diplomat\'s Pack', 'Pack',
        ARRAY[
          'Includes: a chest, 2 cases for maps and scrolls, a set of fine clothes, a bottle of ink, an ink pen, a lamp, 2 flasks of oil, 5 sheets of paper, a vial of perfume, sealing wax, and soap.'
        ]
      ),
      ('dungeoneers-pack', 'Dungeoneer\'s Pack', 'Pack',
        ARRAY[
          'Includes: a backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days of rations, and a waterskin.',
          'The pack also has 50 feet of hempen rope strapped to the side of it.'
        ]
      ),
      ('entertainers-pack', 'Entertainer\'s Pack', 'Pack',
        ARRAY[
          'Includes: a backpack, a bedroll, 2 costumes, 5 candles, 5 days of rations, a waterskin, and a disguise kit.'
        ]
      ),
      ('explorers-pack', 'Explorer\'s Pack', 'Pack',
        ARRAY[
          'Includes: a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin.',
          'The pack also has 50 feet of hempen rope strapped to the side of it.'
        ]
      ),
      ('priests-pack', 'Priest\'s Pack', 'Pack',
        ARRAY[
          'Includes: a backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks of incense, a censer, vestments, 2 days of rations, and a waterskin.'
        ]
      ),
      ('scholars-pack', 'Scholar\'s Pack', 'Pack',
        ARRAY[
          'Includes: a backpack, a book of lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.'
        ]
      );
    `);
    console.log('✅ Equipment packs seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding equipment packs:', err);
  }
}
