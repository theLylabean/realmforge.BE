import db from '../client.js';

export async function seedProficiencies() {
  try {
    await db.query('TRUNCATE proficiencies RESTART IDENTITY CASCADE');

    const proficiencies = [

      // ==== ARMOR ====
      { index: 'light-armor', name: 'Light Armor', type: 'Armor' },
      { index: 'medium-armor', name: 'Medium Armor', type: 'Armor' },
      { index: 'heavy-armor', name: 'Heavy Armor', type: 'Armor' },
      { index: 'shields', name: 'Shields', type: 'Armor' },

      // ==== WEAPONS ====
      { index: 'simple-weapons', name: 'Simple Weapons', type: 'Weapon' },
      { index: 'martial-weapons', name: 'Martial Weapons', type: 'Weapon' },

      // Simple Melee
      { index: 'club', name: 'Club', type: 'Weapon' },
      { index: 'dagger', name: 'Dagger', type: 'Weapon' },
      { index: 'greatclub', name: 'Greatclub', type: 'Weapon' },
      { index: 'handaxe', name: 'Handaxe', type: 'Weapon' },
      { index: 'javelin', name: 'Javelin', type: 'Weapon' },
      { index: 'light-hammer', name: 'Light Hammer', type: 'Weapon' },
      { index: 'mace', name: 'Mace', type: 'Weapon' },
      { index: 'quarterstaff', name: 'Quarterstaff', type: 'Weapon' },
      { index: 'sickle', name: 'Sickle', type: 'Weapon' },
      { index: 'spear', name: 'Spear', type: 'Weapon' },

      // Simple Ranged
      { index: 'light-crossbow', name: 'Light Crossbow', type: 'Weapon' },
      { index: 'dart', name: 'Dart', type: 'Weapon' },
      { index: 'shortbow', name: 'Shortbow', type: 'Weapon' },
      { index: 'sling', name: 'Sling', type: 'Weapon' },

      // Martial Melee
      { index: 'battleaxe', name: 'Battleaxe', type: 'Weapon' },
      { index: 'flail', name: 'Flail', type: 'Weapon' },
      { index: 'glaive', name: 'Glaive', type: 'Weapon' },
      { index: 'greataxe', name: 'Greataxe', type: 'Weapon' },
      { index: 'greatsword', name: 'Greatsword', type: 'Weapon' },
      { index: 'halberd', name: 'Halberd', type: 'Weapon' },
      { index: 'lance', name: 'Lance', type: 'Weapon' },
      { index: 'longsword', name: 'Longsword', type: 'Weapon' },
      { index: 'maul', name: 'Maul', type: 'Weapon' },
      { index: 'morningstar', name: 'Morningstar', type: 'Weapon' },
      { index: 'pike', name: 'Pike', type: 'Weapon' },
      { index: 'rapier', name: 'Rapier', type: 'Weapon' },
      { index: 'scimitar', name: 'Scimitar', type: 'Weapon' },
      { index: 'shortsword', name: 'Shortsword', type: 'Weapon' },
      { index: 'trident', name: 'Trident', type: 'Weapon' },
      { index: 'war-pick', name: 'War Pick', type: 'Weapon' },
      { index: 'warhammer', name: 'Warhammer', type: 'Weapon' },
      { index: 'whip', name: 'Whip', type: 'Weapon' },

      // Martial Ranged
      { index: 'blowgun', name: 'Blowgun', type: 'Weapon' },
      { index: 'hand-crossbow', name: 'Hand Crossbow', type: 'Weapon' },
      { index: 'heavy-crossbow', name: 'Heavy Crossbow', type: 'Weapon' },
      { index: 'longbow', name: 'Longbow', type: 'Weapon' },
      { index: 'net', name: 'Net', type: 'Weapon' },

      // ==== SAVING THROWS ====
      { index: 'saving-throw-str', name: 'Saving Throw: Strength', type: 'Saving Throw' },
      { index: 'saving-throw-dex', name: 'Saving Throw: Dexterity', type: 'Saving Throw' },
      { index: 'saving-throw-con', name: 'Saving Throw: Constitution', type: 'Saving Throw' },
      { index: 'saving-throw-int', name: 'Saving Throw: Intelligence', type: 'Saving Throw' },
      { index: 'saving-throw-wis', name: 'Saving Throw: Wisdom', type: 'Saving Throw' },
      { index: 'saving-throw-cha', name: 'Saving Throw: Charisma', type: 'Saving Throw' },

      // ==== SKILLS ====
      { index: 'skill-acrobatics', name: 'Acrobatics', type: 'Skill' },
      { index: 'skill-animal-handling', name: 'Animal Handling', type: 'Skill' },
      { index: 'skill-arcana', name: 'Arcana', type: 'Skill' },
      { index: 'skill-athletics', name: 'Athletics', type: 'Skill' },
      { index: 'skill-deception', name: 'Deception', type: 'Skill' },
      { index: 'skill-history', name: 'History', type: 'Skill' },
      { index: 'skill-insight', name: 'Insight', type: 'Skill' },
      { index: 'skill-intimidation', name: 'Intimidation', type: 'Skill' },
      { index: 'skill-investigation', name: 'Investigation', type: 'Skill' },
      { index: 'skill-medicine', name: 'Medicine', type: 'Skill' },
      { index: 'skill-nature', name: 'Nature', type: 'Skill' },
      { index: 'skill-perception', name: 'Perception', type: 'Skill' },
      { index: 'skill-performance', name: 'Performance', type: 'Skill' },
      { index: 'skill-persuasion', name: 'Persuasion', type: 'Skill' },
      { index: 'skill-religion', name: 'Religion', type: 'Skill' },
      { index: 'skill-sleight-of-hand', name: 'Sleight of Hand', type: 'Skill' },
      { index: 'skill-stealth', name: 'Stealth', type: 'Skill' },
      { index: 'skill-survival', name: 'Survival', type: 'Skill' },

      // ==== TOOLS ====
      // Artisan’s Tools
      { index: 'alchemist-supplies', name: 'Alchemist\'s Supplies', type: 'Tool' },
      { index: 'brewers-supplies', name: 'Brewer\'s Supplies', type: 'Tool' },
      { index: 'calligraphers-supplies', name: 'Calligrapher\'s Supplies', type: 'Tool' },
      { index: 'carpenters-tools', name: 'Carpenter\'s Tools', type: 'Tool' },
      { index: 'cartographers-tools', name: 'Cartographer\'s Tools', type: 'Tool' },
      { index: 'cobblers-tools', name: 'Cobbler\'s Tools', type: 'Tool' },
      { index: 'cooks-utensils', name: 'Cook\'s Utensils', type: 'Tool' },
      { index: 'glassblowers-tools', name: 'Glassblower\'s Tools', type: 'Tool' },
      { index: 'jewelers-tools', name: 'Jeweler\'s Tools', type: 'Tool' },
      { index: 'leatherworkers-tools', name: 'Leatherworker\'s Tools', type: 'Tool' },
      { index: 'masons-tools', name: 'Mason\'s Tools', type: 'Tool' },
      { index: 'painters-supplies', name: 'Painter\'s Supplies', type: 'Tool' },
      { index: 'potters-tools', name: 'Potter\'s Tools', type: 'Tool' },
      { index: 'smiths-tools', name: 'Smith\'s Tools', type: 'Tool' },
      { index: 'tinkers-tools', name: 'Tinker\'s Tools', type: 'Tool' },
      { index: 'weavers-tools', name: 'Weaver\'s Tools', type: 'Tool' },
      { index: 'woodcarvers-tools', name: 'Woodcarver\'s Tools', type: 'Tool' },

      // Musical Instruments
      { index: 'bagpipes', name: 'Bagpipes', type: 'Tool' },
      { index: 'drum', name: 'Drum', type: 'Tool' },
      { index: 'dulcimer', name: 'Dulcimer', type: 'Tool' },
      { index: 'flute', name: 'Flute', type: 'Tool' },
      { index: 'lute', name: 'Lute', type: 'Tool' },
      { index: 'lyre', name: 'Lyre', type: 'Tool' },
      { index: 'horn', name: 'Horn', type: 'Tool' },
      { index: 'pan-flute', name: 'Pan Flute', type: 'Tool' },
      { index: 'shawm', name: 'Shawm', type: 'Tool' },
      { index: 'viol', name: 'Viol', type: 'Tool' },

      // Gaming Sets
      { index: 'dice-set', name: 'Dice Set', type: 'Tool' },
      { index: 'dragonchess-set', name: 'Dragonchess Set', type: 'Tool' },
      { index: 'playing-card-set', name: 'Playing Card Set', type: 'Tool' },
      { index: 'three-dragon-ante-set', name: 'Three-Dragon Ante Set', type: 'Tool' },

      // Misc Tools
      { index: 'disguise-kit', name: 'Disguise Kit', type: 'Tool' },
      { index: 'forgery-kit', name: 'Forgery Kit', type: 'Tool' },
      { index: 'herbalism-kit', name: 'Herbalism Kit', type: 'Tool' },
      { index: 'navigator-tools', name: 'Navigator\'s Tools', type: 'Tool' },
      { index: 'poisoners-kit', name: 'Poisoner\'s Kit', type: 'Tool' },
      { index: 'thieves-tools', name: 'Thieves\' Tools', type: 'Tool' },
      { index: 'vehicles-land', name: 'Vehicles (Land)', type: 'Tool' },
      { index: 'vehicles-water', name: 'Vehicles (Water)', type: 'Tool' }
    ];

    for (const prof of proficiencies) {
        await db.query(
            `INSERT INTO proficiencies (index, name, type)
            VALUES ($1, $2, $3)
            ON CONFLICT (index) DO NOTHING`,
            [prof.index, prof.name, prof.type]
        );
    }
    console.log('✅ All proficiencies seeded successfully.');
  } catch (error) {
    console.error('❌ Error seeding proficiencies:', error);
  }
}