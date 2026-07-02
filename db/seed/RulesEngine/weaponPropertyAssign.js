import db from '../db/client.js';

export async function seedWeaponPropertyAssignments() {
  try {
    await db.query('TRUNCATE weapon_property_assignments RESTART IDENTITY CASCADE');
    await db.query(`
      INSERT INTO weapon_property_assignments (weapon_index, property_index) VALUES
      
        -- Simple Melee
        ('club', 'light'),
        ('dagger', 'finesse'),
        ('dagger', 'light'),
        ('dagger', 'thrown'),
        ('greatclub', 'two-handed'),
        ('handaxe', 'light'),
        ('handaxe', 'thrown'),
        ('javelin', 'thrown'),
        ('light-hammer', 'light'),
        ('light-hammer', 'thrown'),
        ('quarterstaff', 'versatile'),
        ('sickle', 'light'),
        ('spear', 'thrown'),
        ('spear', 'versatile'),

        -- Simple Ranged
        ('crossbow-light', 'ammunition'),
        ('crossbow-light', 'loading'),
        ('crossbow-light', 'two-handed'),
        ('dart', 'finesse'),
        ('dart', 'thrown'),
        ('shortbow', 'ammunition'),
        ('shortbow', 'two-handed'),
        ('sling', 'ammunition'),

        -- Martial Melee
        ('battleaxe', 'versatile'),
        ('glaive', 'heavy'),
        ('glaive', 'reach'),
        ('glaive', 'two-handed'),
        ('greataxe', 'heavy'),
        ('greataxe', 'two-handed'),
        ('greatsword', 'heavy'),
        ('greatsword', 'two-handed'),
        ('halberd', 'heavy'),
        ('halberd', 'reach'),
        ('halberd', 'two-handed'),
        ('lance', 'reach'),
        ('lance', 'special'),
        ('longsword', 'versatile'),
        ('maul', 'heavy'),
        ('maul', 'two-handed'),
        ('pike', 'heavy'),
        ('pike', 'reach'),
        ('pike', 'two-handed'),
        ('rapier', 'finesse'),
        ('scimitar', 'finesse'),
        ('scimitar', 'light'),
        ('shortsword', 'finesse'),
        ('shortsword', 'light'),
        ('trident', 'thrown'),
        ('trident', 'versatile'),
        ('warhammer', 'versatile'),
        ('whip', 'finesse'),
        ('whip', 'reach'),

        -- Martial Ranged
        ('blowgun', 'ammunition'),
        ('blowgun', 'loading'),
        ('crossbow-hand', 'ammunition'),
        ('crossbow-hand', 'light'),
        ('crossbow-hand', 'loading'),
        ('crossbow-heavy', 'ammunition'),
        ('crossbow-heavy', 'heavy'),
        ('crossbow-heavy', 'loading'),
        ('crossbow-heavy', 'two-handed'),
        ('longbow', 'ammunition'),
        ('longbow', 'heavy'),
        ('longbow', 'two-handed'),
        ('net', 'special'),
        ('net', 'thrown')

        -- Optional block: uncomment if you want *every weapon* to have at least one property row
        /*
        ,('mace', 'special'),
        ('flail', 'special'),
        ('morningstar', 'special'),
        ('war-pick', 'special')
        */
    `);
    console.log('✅ Weapon → Property assignments seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding weapon → property assignments: ', err);
  }
}

seedWeaponPropertyAssignments();