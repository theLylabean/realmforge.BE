

import db from '../db/client.js';

export async function seedMonsters() {
    try {
        await db.query('TRUNCATE monsters RESTART IDENTITY CASCADE');
        await db.query(`
            INSERT INTO monsters (
                index, name, size, type, subtype, alignment,
                armor_class, hit_points, hit_dice, speed, xp,
                strength, dexterity, constitution, intelligence, wisdom, charisma,
                description, actions, legendary_actions, proficiencies
            ) VALUES
            (
                'aboleth', 'Aboleth', 'Large', 'aberration', null, 'lawful evil',
                17, 135, '18d10+36', '{"swim":"40 ft."}', 2900,
                21, 9, 15, 18, 15, 18,
                ARRAY['An ancient, amphibious aberration with vast psionic powers.'],
                '[{"name": "Multiattack", "desc": "The aboleth makes three tentacle attacks."}, {"name": "Tentacle", "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage."}]',
                '[{"name": "Enslave", "desc": "The aboleth targets one creature it can see within 30 feet. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed."}]',
                'Perception +10, Stealth +6'
            ),
            (
                'acolyte', 'Acolyte', 'Medium', 'humanoid', 'any race', 'any alignment',
                10, 9, '2d8', '{"walk":"30 ft."}', 25,
                10, 10, 10, 10, 14, 11,
                ARRAY['A temple servant with divine spells.'],
                '[{"name": "Club", "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."}]',
                '[]',
                'Insight +2, Religion +2'
            ),
            (
                'adult-black-dragon', 'Adult Black Dragon', 'Huge', 'dragon', null, 'chaotic evil',
                19, 195, '17d12+85', '{"fly":"80 ft.","swim":"40 ft.","walk":"40 ft."}', 16500,
                23, 14, 21, 14, 13, 17,
                ARRAY['A cunning and cruel black dragon.'],
                '[{"name": "Acid Breath", "desc": "The dragon exhales acid in a 60-foot line. Each creature in that line must make a DC 18 Dexterity saving throw."}]',
                '[{"name": "Legendary Resistance", "desc": "If the dragon fails a saving throw, it can choose to succeed instead."}]',
                'Perception +10, Stealth +7'
            ),
            (
                'air-elemental', 'Air Elemental', 'Large', 'elemental', null, 'neutral',
                15, 90, '12d10+24', '{"fly":"90 ft. (hover)"}', 1800,
                14, 20, 14, 6, 10, 6,
                ARRAY['A whirling mass of air and storm.'],
                '[{"name": "Whirlwind", "desc": "Each creature in the elemental\'s space must make a DC 13 Strength saving throw or take 15 (3d8 + 2) bludgeoning damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'ankheg', 'Ankheg', 'Large', 'monstrosity', null, 'unaligned',
                14, 39, '6d10+6', '{"burrow":"10 ft.","walk":"30 ft."}', 450,
                17, 11, 13, 1, 13, 6,
                ARRAY['A burrowing insectoid predator.'],
                '[{"name": "Acid Spray", "desc": "The ankheg spits acid in a 30-foot line. Each creature in that line must make a DC 13 Dexterity saving throw."}]',
                '[]',
                ''
            ),
            (
                'animated-armor', 'Animated Armor', 'Medium', 'construct', null, 'unaligned',
                18, 33, '6d8+6', '{"walk":"25 ft."}', 200,
                14, 11, 13, 1, 3, 1,
                ARRAY['A suit of magically animated armor.'],
                '[{"name": "Slam", "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'ankylosaurus', 'Ankylosaurus', 'Huge', 'beast', null, 'unaligned',
                15, 68, '8d12+16', '{"walk":"30 ft."}', 500,
                19, 11, 15, 2, 12, 5,
                ARRAY['A massive armored dinosaur with a clubbed tail.'],
                '[{"name": "Tail", "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'archmage', 'Archmage', 'Medium', 'humanoid', 'any race', 'any alignment',
                12, 99, '18d8', '{"walk":"30 ft."}', 18000,
                10, 14, 12, 20, 15, 16,
                ARRAY['A powerful wizard of incredible knowledge.'],
                '[{"name": "Staff", "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."}]',
                '[]',
                'Arcana +7, History +7'
            ),
            (
                'assassin', 'Assassin', 'Medium', 'humanoid', 'any race', 'any non-good alignment',
                15, 78, '12d8+24', '{"walk":"30 ft."}', 3900,
                11, 16, 14, 13, 11, 10,
                ARRAY['A hired killer skilled in stealth and poison.'],
                '[{"name": "Multiattack", "desc": "The assassin makes two shortsword attacks."}]',
                '[]',
                'Stealth +7, Deception +3'
            ),
            (
                'awakened-shrub', 'Awakened Shrub', 'Small', 'plant', null, 'unaligned',
                9, 10, '3d6', '{"walk":"20 ft."}', 10,
                3, 8, 11, 10, 10, 6,
                ARRAY['A magically awakened shrub that can walk and talk.'],
                '[{"name": "Rake", "desc": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 slashing damage."}]',
                '[]',
                ''
            ),
            (
                'axe-beak', 'Axe Beak', 'Large', 'beast', null, 'unaligned',
                11, 19, '3d10+3', '{"walk":"50 ft."}', 100,
                14, 12, 12, 2, 10, 5,
                ARRAY['A large, flightless bird with a deadly beak.'],
                '[{"name":"Beak", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'azer', 'Azer', 'Medium', 'elemental', null, 'lawful neutral',
                17, 39, '6d8+12', '{"walk":"30 ft."}', 700,
                17, 12, 15, 12, 13, 10,
                ARRAY['A dwarf-like elemental made of living flame.'],
                '[{"name":"Warhammer", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 3 (1d6) fire damage."}]',
                '[]',
                'Smith\'s tools +5'
            ),
            (
                'banshee', 'Banshee', 'Medium', 'undead', null, 'chaotic evil',
                12, 58, '13d8', '{"fly":"40 ft.","hover":true}', 1100,
                1, 14, 10, 12, 11, 17,
                ARRAY['The spirit of a female elf filled with sorrow and rage.'],
                '[{"name":"Wail", "desc":"Each non-undead creature within 30 ft. that can hear the banshee must make a DC 13 Con save or drop to 0 hit points."}]',
                '[]',
                'Perception +3, Stealth +6'
            ),
            (
                'barbed-devil', 'Barbed Devil', 'Medium', 'fiend', 'devil', 'lawful evil',
                15, 110, '13d8+52', '{"walk":"30 ft."}', 1800,
                16, 17, 18, 12, 14, 14,
                ARRAY['A spiny devil that hurls fire and stabs with barbs.'],
                '[{"name":"Hurl Flame", "desc":"Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage."}]',
                '[]',
                'Intimidation +5'
            ),
            (
                'basilisk', 'Basilisk', 'Medium', 'monstrosity', null, 'unaligned',
                15, 52, '8d8+16', '{"walk":"20 ft."}', 450,
                16, 8, 15, 2, 8, 7,
                ARRAY['A reptilian creature with a deadly gaze that can turn creatures to stone.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'bat', 'Bat', 'Tiny', 'beast', null, 'unaligned',
                12, 1, '1d4-1', '{"fly":"30 ft.","hover":true}', 10,
                2, 15, 8, 2, 12, 4,
                ARRAY['A harmless flying nocturnal mammal.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'bearded-devil', 'Bearded Devil', 'Medium', 'fiend', 'devil', 'lawful evil',
                13, 52, '8d8+16', '{"walk":"30 ft."}', 1100,
                16, 15, 15, 9, 11, 11,
                ARRAY['A devil with a venomous beard and glaive.'],
                '[{"name":"Beard", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 5 (2d4) poison damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'behir', 'Behir', 'Huge', 'monstrosity', null, 'neutral evil',
                17, 168, '16d12+64', '{"climb":"40 ft.","walk":"50 ft."}', 10000,
                23, 16, 18, 7, 14, 12,
                ARRAY['A serpentine monster with lightning breath.'],
                '[{"name":"Lightning Breath", "desc":"The behir exhales lightning in a 20-foot line. Each creature in that line must make a DC 16 Dex save or take 66 (12d10) lightning damage."}]',
                '[]',
                'Perception +6'
            ),
            (
                'berserker', 'Berserker', 'Medium', 'humanoid', 'any race', 'any chaotic alignment',
                13, 67, '9d8+27', '{"walk":"30 ft."}', 450,
                16, 12, 17, 9, 11, 9,
                ARRAY['A frenzied warrior that fights recklessly.'],
                '[{"name":"Greataxe", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'black-bear', 'Black Bear', 'Medium', 'beast', null, 'unaligned',
                11, 19, '3d8+6', '{"walk":"40 ft.","climb":"30 ft."}', 100,
                15, 10, 14, 2, 12, 7,
                ARRAY['A forest-dwelling bear known for aggression when provoked.'],
                '[{"name":"Multiattack", "desc":"The bear makes two attacks: one with its bite and one with its claws."}]',
                '[]',
                'Perception +3'
            ),
            (
                'black-dragon-wyrmling', 'Black Dragon Wyrmling', 'Medium', 'dragon', null, 'chaotic evil',
                17, 33, '6d8+6', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 700,
                15, 14, 13, 10, 11, 13,
                ARRAY['A young and cunning dragon with acid breath.'],
                '[{"name":"Acid Breath", "desc":"The dragon exhales acid in a 15-foot line. Each creature must make a DC 11 Dex save."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'black-pudding', 'Black Pudding', 'Large', 'ooze', null, 'unaligned',
                7, 85, '10d10+30', '{"climb":"20 ft.","walk":"20 ft."}', 1800,
                16, 5, 16, 1, 6, 1,
                ARRAY['A corrosive ooze that dissolves metal and flesh.'],
                '[{"name":"Pseudopod", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage."}]',
                '[]',
                ''
            ),
            (
                'blink-dog', 'Blink Dog', 'Medium', 'fey', null, 'lawful good',
                13, 22, '5d8', '{"walk":"40 ft."}', 200,
                12, 17, 12, 10, 13, 11,
                ARRAY['A magical canine that teleports during combat.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage."}]',
                '[]',
                'Perception +3, Stealth +5'
            ),
            (
                'boar', 'Boar', 'Medium', 'beast', null, 'unaligned',
                11, 11, '2d8', '{"walk":"40 ft."}', 50,
                13, 11, 12, 2, 9, 5,
                ARRAY['A feral pig with a powerful charge.'],
                '[{"name":"Tusk", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'bone-devil', 'Bone Devil', 'Large', 'fiend', 'devil', 'lawful evil',
                19, 142, '15d10+60', '{"fly":"40 ft.","walk":"40 ft."}', 8400,
                18, 16, 18, 13, 14, 16,
                ARRAY['A skeletal devil with a venomous sting.'],
                '[{"name":"Sting", "desc":"Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 18 (4d8) poison damage."}]',
                '[{"name":"Teleport", "desc":"The devil magically teleports, along with any equipment, to an unoccupied space it can see within 120 feet."}]',
                'Deception +6, Insight +6'
            ),
            (
                'brass-dragon-wyrmling', 'Brass Dragon Wyrmling', 'Medium', 'dragon', null, 'chaotic good',
                16, 16, '3d8+3', '{"fly":"60 ft.","walk":"30 ft."}', 200,
                15, 10, 13, 10, 11, 13,
                ARRAY['A chatty, sun-loving young brass dragon.'],
                '[{"name":"Fire Breath", "desc":"The dragon exhales fire in a 20-foot line. Each creature in that line must make a DC 11 Dex saving throw."}]',
                '[]',
                'Perception +3, Stealth +2'
            ),
            (
                'brown-bear', 'Brown Bear', 'Large', 'beast', null, 'unaligned',
                11, 34, '4d10+12', '{"walk":"40 ft.","swim":"30 ft."}', 450,
                19, 10, 16, 2, 13, 7,
                ARRAY['A powerful omnivorous bear found in forests and mountains.'],
                '[{"name":"Multiattack", "desc":"The bear makes two attacks: one with its bite and one with its claws."}]',
                '[]',
                'Perception +3'
            ),
            (
                'bugbear', 'Bugbear', 'Medium', 'humanoid', 'goblinoid', 'chaotic evil',
                16, 27, '5d8+5', '{"walk":"30 ft."}', 200,
                15, 14, 13, 8, 11, 9,
                ARRAY['A hulking goblinoid that strikes from the shadows.'],
                '[{"name":"Morningstar", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage."}]',
                '[]',
                'Stealth +6, Survival +2'
            ),
            (
                'bulette', 'Bulette', 'Large', 'monstrosity', null, 'unaligned',
                17, 94, '9d10+45', '{"burrow":"40 ft.","walk":"40 ft."}', 1800,
                19, 11, 21, 2, 10, 5,
                ARRAY['A heavily armored land shark that bursts from the earth.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'camel', 'Camel', 'Large', 'beast', null, 'unaligned',
                9, 15, '2d10+4', '{"walk":"50 ft."}', 50,
                16, 8, 14, 2, 8, 5,
                ARRAY['A desert-dwelling beast of burden.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'cat', 'Cat', 'Tiny', 'beast', null, 'unaligned',
                12, 2, '1d4', '{"walk":"40 ft.","climb":"30 ft."}', 10,
                3, 15, 10, 3, 12, 7,
                ARRAY['A domesticated feline with sharp senses.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage."}]',
                '[]',
                'Perception +3, Stealth +4'
            ),
            (
                'centaur', 'Centaur', 'Large', 'monstrosity', null, 'neutral good',
                12, 45, '6d10+12', '{"walk":"50 ft."}', 1100,
                18, 14, 14, 9, 13, 11,
                ARRAY['Half-human, half-horse nomadic warriors.'],
                '[{"name":"Multiattack", "desc":"The centaur makes two attacks: one with its pike and one with its hooves."}]',
                '[]',
                'Athletics +6, Survival +3'
            ),
            (
                'chain-devil', 'Chain Devil', 'Medium', 'fiend', 'devil', 'lawful evil',
                16, 85, '10d8+40', '{"walk":"30 ft."}', 4500,
                18, 15, 18, 11, 12, 14,
                ARRAY['A terrifying devil that manipulates chains as weapons.'],
                '[{"name":"Multiattack", "desc":"The devil makes two chain attacks."}]',
                '[{"name":"Unnerving Mask", "desc":"As a bonus action, the devil targets one creature and forces a DC 14 Wisdom saving throw or it becomes frightened."}]',
                'Intimidation +6'
            ),
            (
                'chimera', 'Chimera', 'Large', 'monstrosity', null, 'chaotic evil',
                14, 114, '12d10+48', '{"fly":"60 ft.","walk":"30 ft."}', 2300,
                19, 11, 19, 3, 14, 10,
                ARRAY['A monstrous hybrid of lion, goat, and dragon.'],
                '[{"name":"Fire Breath", "desc":"(Recharge 5–6) The dragon head exhales fire in a 15-ft cone (Dex DC 15)."}]',
                '[]',
                'Perception +5'
            ),
            (
                'clay-golem', 'Clay Golem', 'Large', 'construct', null, 'unaligned',
                14, 133, '14d10+56', '{"walk":"20 ft."}', 5000,
                20, 9, 18, 3, 8, 1,
                ARRAY['A hulking automaton sculpted from clay.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'cockatrice', 'Cockatrice', 'Small', 'monstrosity', null, 'unaligned',
                11, 27, '6d6+6', '{"fly":"40 ft.","walk":"20 ft."}', 100,
                6, 12, 12, 2, 13, 5,
                ARRAY['A bat-winged chicken-like creature with a petrifying bite.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage."}]',
                '[]',
                ''
            ),
            (
                'commoner', 'Commoner', 'Medium', 'humanoid', 'any race', 'any alignment',
                10, 4, '1d8', '{"walk":"30 ft."}', 10,
                10, 10, 10, 10, 10, 10,
                ARRAY['An ordinary townsfolk or villager.'],
                '[{"name":"Club", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'constrictor-snake', 'Constrictor Snake', 'Large', 'beast', null, 'unaligned',
                12, 13, '2d10+2', '{"swim":"30 ft.","walk":"30 ft."}', 50,
                15, 14, 12, 1, 10, 3,
                ARRAY['A powerful snake that crushes its prey.'],
                '[{"name":"Constrict", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage and the target is grappled (escape DC 14)."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'crab', 'Crab', 'Tiny', 'beast', null, 'unaligned',
                11, 2, '1d4', '{"swim":"20 ft.","walk":"20 ft."}', 10,
                2, 11, 10, 1, 8, 2,
                ARRAY['A small crustacean with sharp pincers.'],
                '[{"name":"Claw", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage."}]',
                '[]',
                'Stealth +2'
            ),
            (
                'crocodile', 'Crocodile', 'Large', 'beast', null, 'unaligned',
                12, 19, '3d10+3', '{"swim":"30 ft.","walk":"20 ft."}', 100,
                15, 10, 13, 2, 10, 5,
                ARRAY['A stealthy aquatic predator with a strong bite.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."}]',
                '[]',
                'Stealth +2'
            ),
            (
                'cultist', 'Cultist', 'Medium', 'humanoid', 'any race', 'any non-good alignment',
                12, 9, '2d8', '{"walk":"30 ft."}', 50,
                11, 12, 10, 10, 11, 10,
                ARRAY['A follower of a dark or forbidden power.'],
                '[{"name":"Scimitar", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."}]',
                '[]',
                'Deception +2, Religion +2'
            ),
            (
                'darkmantle', 'Darkmantle', 'Small', 'monstrosity', null, 'unaligned',
                11, 22, '5d6+5', '{"fly":"30 ft.","walk":"10 ft."}', 100,
                16, 12, 13, 2, 10, 5,
                ARRAY['A cave-dwelling predator that drops on prey from the ceiling.'],
                '[{"name":"Crush", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage and the target is blinded."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'death-dog', 'Death Dog', 'Medium', 'monstrosity', null, 'neutral evil',
                12, 39, '6d8+12', '{"walk":"40 ft."}', 200,
                15, 14, 14, 3, 12, 6,
                ARRAY['A two-headed hound with diseased bites.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage and the target must make a DC 12 Con save or contract a disease."}]',
                '[]',
                'Perception +4'
            ),
            (
                'deep-gnome', 'Deep Gnome (Svirfneblin)', 'Small', 'humanoid', 'gnome', 'neutral good',
                15, 16, '3d6', '{"walk":"20 ft."}', 100,
                15, 14, 12, 12, 10, 9,
                ARRAY['A reclusive, subterranean gnome with innate magical abilities.'],
                '[{"name":"War Pick", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage."}]',
                '[]',
                'Stealth +6'
            ),
            (
                'deer', 'Deer', 'Medium', 'beast', null, 'unaligned',
                13, 4, '1d8', '{"walk":"50 ft."}', 10,
                11, 16, 11, 2, 14, 5,
                ARRAY['A skittish herbivore with quick reflexes.'],
                '[{"name":"Hooves", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'derro', 'Derro', 'Small', 'humanoid', 'derro', 'chaotic evil',
                13, 13, '3d6', '{"walk":"30 ft."}', 100,
                11, 14, 12, 10, 9, 5,
                ARRAY['Mad and cruel humanoids from the Underdark.'],
                '[{"name":"Hooked Shortspear", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'dretch', 'Dretch', 'Small', 'fiend', 'demon', 'chaotic evil',
                11, 18, '4d6+4', '{"walk":"20 ft."}', 200,
                11, 11, 12, 5, 8, 3,
                ARRAY['A wretched, stinking demon spawned from chaos.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."}]',
                '[]',
                'Perception +1'
            ),
            (
                'dryad', 'Dryad', 'Medium', 'fey', null, 'neutral',
                11, 22, '5d8', '{"walk":"30 ft."}', 700,
                10, 12, 11, 14, 15, 18,
                ARRAY['A tree spirit who protects the forests.'],
                '[{"name":"Club", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."}]',
                '[]',
                'Nature +6, Stealth +5'
            ),
            (
                'duergar', 'Duergar', 'Medium', 'humanoid', 'dwarf', 'lawful evil',
                16, 26, '4d8+8', '{"walk":"25 ft."}', 200,
                14, 11, 14, 11, 10, 9,
                ARRAY['A grim and spiteful dwarf of the Underdark.'],
                '[{"name":"War Pick", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."}]',
                '[]',
                'Perception +2, Stealth +2'
            ),
            (
                'eagle', 'Eagle', 'Small', 'beast', null, 'unaligned',
                12, 3, '1d6', '{"fly":"60 ft.","walk":"10 ft."}', 10,
                6, 15, 10, 2, 14, 7,
                ARRAY['A keen-eyed bird of prey.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'earth-elemental', 'Earth Elemental', 'Large', 'elemental', null, 'neutral',
                17, 126, '12d10+60', '{"burrow":"30 ft.","walk":"30 ft."}', 5000,
                20, 8, 20, 5, 10, 5,
                ARRAY['A hulking mass of stone and soil.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'elephant', 'Elephant', 'Huge', 'beast', null, 'unaligned',
                12, 76, '8d12+24', '{"walk":"40 ft."}', 1100,
                22, 9, 17, 3, 11, 6,
                ARRAY['A massive herbivore with devastating tusks and a trunk.'],
                '[{"name":"Gore", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 25 (3d10 + 6) piercing damage."}]',
                '[]',
                ''
            ),
            (
                'elk', 'Elk', 'Large', 'beast', null, 'unaligned',
                10, 13, '2d10', '{"walk":"50 ft."}', 50,
                16, 10, 12, 2, 10, 6,
                ARRAY['A powerful horned animal found in woodlands.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'empyrean', 'Empyrean', 'Huge', 'celestial', null, 'chaotic good',
                22, 313, '21d12+168', '{"fly":"90 ft.","walk":"60 ft."}', 33000,
                30, 21, 30, 21, 22, 27,
                ARRAY['A godlike child of the gods.'],
                '[{"name":"Maul", "desc":"Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6 + 10) bludgeoning damage."}]',
                '[{"name":"Legendary Resistance", "desc":"If the empyrean fails a saving throw, it can choose to succeed instead."}]',
                'Insight +12, Perception +12'
            ),
            (
                'erinyes', 'Erinyes', 'Medium', 'fiend', 'devil', 'lawful evil',
                18, 153, '18d8+72', '{"fly":"60 ft.","walk":"30 ft."}', 10000,
                18, 20, 20, 16, 18, 20,
                ARRAY['A fierce avenger and enforcer of hell’s will.'],
                '[{"name":"Longsword", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage plus 13 (3d8) poison damage."}]',
                '[{"name":"Parry", "desc":"The erinyes adds 4 to its AC against one melee attack that would hit it."}]',
                'Deception +9, Intimidation +9'
            ),
            (
                'ettin', 'Ettin', 'Large', 'giant', null, 'chaotic evil',
                12, 85, '9d10+27', '{"walk":"40 ft."}', 1800,
                21, 8, 17, 6, 10, 8,
                ARRAY['A two-headed brute with crude weapons and crude minds.'],
                '[{"name":"Battleaxe", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'faerie-dragon', 'Faerie Dragon (Young)', 'Tiny', 'dragon', null, 'chaotic good',
                15, 10, '3d4+3', '{"fly":"60 ft.","walk":"10 ft."}', 200,
                3, 20, 13, 14, 15, 16,
                ARRAY['A prank-loving dragon with invisibility and charm magic.'],
                '[{"name":"Euphoria Breath", "desc":"Each creature in a 15-foot cone must succeed on a DC 11 Wisdom save or become charmed for 1 minute."}]',
                '[]',
                'Arcana +4, Perception +3, Stealth +7'
            ),
            (
                'fire-elemental', 'Fire Elemental', 'Large', 'elemental', null, 'neutral',
                13, 102, '12d10', '{"fly":"50 ft.","hover":true}', 3900,
                10, 17, 16, 6, 10, 7,
                ARRAY['A living blaze that ignites everything it touches.'],
                '[{"name":"Touch", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) fire damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'fire-giant', 'Fire Giant', 'Huge', 'giant', null, 'lawful evil',
                18, 162, '13d12+78', '{"walk":"30 ft."}', 5000,
                25, 9, 23, 10, 14, 13,
                ARRAY['A militaristic giant with burning iron armor and weapons.'],
                '[{"name":"Greatsword", "desc":"Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage."}]',
                '[]',
                'Athletics +9, Perception +6'
            ),
            (
                'flameskull', 'Flameskull', 'Tiny', 'undead', null, 'neutral evil',
                13, 40, '9d4+18', '{"fly":"40 ft.","hover":true}', 1100,
                1, 17, 10, 16, 11, 11,
                ARRAY['A floating, fiery skull animated by dark magic.'],
                '[{"name":"Fire Ray", "desc":"Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6) fire damage."}]',
                '[{"name":"Rejuvenation", "desc":"If destroyed, it regains full HP in 1 hour unless holy water or dispel magic is used."}]',
                'Arcana +3, Perception +2'
            ),
            (
                'flesh-golem', 'Flesh Golem', 'Medium', 'construct', null, 'neutral',
                9, 93, '11d8+44', '{"walk":"30 ft."}', 1800,
                19, 9, 18, 6, 10, 5,
                ARRAY['A stitched-together monstrosity animated by lightning.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'flying-snake', 'Flying Snake', 'Tiny', 'beast', null, 'unaligned',
                14, 5, '2d4', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 25,
                4, 18, 11, 2, 12, 5,
                ARRAY['A brightly scaled snake with wings.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 1 piercing damage + 3 (1d6) poison damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'frog', 'Frog', 'Tiny', 'beast', null, 'unaligned',
                11, 1, '1d4-1', '{"swim":"20 ft.","walk":"20 ft."}', 10,
                1, 13, 8, 1, 8, 3,
                ARRAY['A small amphibian with a long tongue.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}]',
                '[]',
                'Perception +1, Stealth +3'
            ),
            (
                'frost-giant', 'Frost Giant', 'Huge', 'giant', null, 'neutral evil',
                15, 138, '12d12+60', '{"walk":"40 ft."}', 3900,
                23, 9, 21, 9, 10, 12,
                ARRAY['An imposing warrior from the icy north.'],
                '[{"name":"Greataxe", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage."}]',
                '[]',
                'Athletics +9, Perception +3'
            ),
            (
                'galeb-duhr', 'Galeb Duhr', 'Medium', 'elemental', null, 'neutral',
                16, 85, '9d8+45', '{"burrow":"15 ft.","walk":"15 ft."}', 1800,
                20, 8, 20, 11, 12, 11,
                ARRAY['A boulder-shaped elemental that animates stones.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'gargoyle', 'Gargoyle', 'Medium', 'elemental', null, 'chaotic evil',
                15, 52, '7d8+21', '{"fly":"60 ft.","walk":"30 ft."}', 450,
                15, 11, 16, 6, 11, 7,
                ARRAY['A winged stone predator that blends into buildings.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'eagle', 'Eagle', 'Small', 'beast', null, 'unaligned',
                12, 3, '1d6', '{"fly":"60 ft.","walk":"10 ft."}', 10,
                6, 15, 10, 2, 14, 7,
                ARRAY['A keen-eyed bird of prey.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'earth-elemental', 'Earth Elemental', 'Large', 'elemental', null, 'neutral',
                17, 126, '12d10+60', '{"burrow":"30 ft.","walk":"30 ft."}', 5000,
                20, 8, 20, 5, 10, 5,
                ARRAY['A hulking mass of stone and soil.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'elephant', 'Elephant', 'Huge', 'beast', null, 'unaligned',
                12, 76, '8d12+24', '{"walk":"40 ft."}', 1100,
                22, 9, 17, 3, 11, 6,
                ARRAY['A massive herbivore with devastating tusks and a trunk.'],
                '[{"name":"Gore", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 25 (3d10 + 6) piercing damage."}]',
                '[]',
                ''
            ),
            (
                'elk', 'Elk', 'Large', 'beast', null, 'unaligned',
                10, 13, '2d10', '{"walk":"50 ft."}', 50,
                16, 10, 12, 2, 10, 6,
                ARRAY['A powerful horned animal found in woodlands.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'empyrean', 'Empyrean', 'Huge', 'celestial', null, 'chaotic good',
                22, 313, '21d12+168', '{"fly":"90 ft.","walk":"60 ft."}', 33000,
                30, 21, 30, 21, 22, 27,
                ARRAY['A godlike child of the gods.'],
                '[{"name":"Maul", "desc":"Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6 + 10) bludgeoning damage."}]',
                '[{"name":"Legendary Resistance", "desc":"If the empyrean fails a saving throw, it can choose to succeed instead."}]',
                'Insight +12, Perception +12'
            ),
            (
                'erinyes', 'Erinyes', 'Medium', 'fiend', 'devil', 'lawful evil',
                18, 153, '18d8+72', '{"fly":"60 ft.","walk":"30 ft."}', 10000,
                18, 20, 20, 16, 18, 20,
                ARRAY['A fierce avenger and enforcer of hell’s will.'],
                '[{"name":"Longsword", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage plus 13 (3d8) poison damage."}]',
                '[{"name":"Parry", "desc":"The erinyes adds 4 to its AC against one melee attack that would hit it."}]',
                'Deception +9, Intimidation +9'
            ),
            (
                'ettin', 'Ettin', 'Large', 'giant', null, 'chaotic evil',
                12, 85, '9d10+27', '{"walk":"40 ft."}', 1800,
                21, 8, 17, 6, 10, 8,
                ARRAY['A two-headed brute with crude weapons and crude minds.'],
                '[{"name":"Battleaxe", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'faerie-dragon', 'Faerie Dragon (Young)', 'Tiny', 'dragon', null, 'chaotic good',
                15, 10, '3d4+3', '{"fly":"60 ft.","walk":"10 ft."}', 200,
                3, 20, 13, 14, 15, 16,
                ARRAY['A prank-loving dragon with invisibility and charm magic.'],
                '[{"name":"Euphoria Breath", "desc":"Each creature in a 15-foot cone must succeed on a DC 11 Wisdom save or become charmed for 1 minute."}]',
                '[]',
                'Arcana +4, Perception +3, Stealth +7'
            ),
            (
                'fire-elemental', 'Fire Elemental', 'Large', 'elemental', null, 'neutral',
                13, 102, '12d10', '{"fly":"50 ft.","hover":true}', 3900,
                10, 17, 16, 6, 10, 7,
                ARRAY['A living blaze that ignites everything it touches.'],
                '[{"name":"Touch", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) fire damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'fire-giant', 'Fire Giant', 'Huge', 'giant', null, 'lawful evil',
                18, 162, '13d12+78', '{"walk":"30 ft."}', 5000,
                25, 9, 23, 10, 14, 13,
                ARRAY['A militaristic giant with burning iron armor and weapons.'],
                '[{"name":"Greatsword", "desc":"Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage."}]',
                '[]',
                'Athletics +9, Perception +6'
            ),
            (
                'flameskull', 'Flameskull', 'Tiny', 'undead', null, 'neutral evil',
                13, 40, '9d4+18', '{"fly":"40 ft.","hover":true}', 1100,
                1, 17, 10, 16, 11, 11,
                ARRAY['A floating, fiery skull animated by dark magic.'],
                '[{"name":"Fire Ray", "desc":"Ranged Spell Attack: +5 to hit, range 30 ft., one target. Hit: 10 (3d6) fire damage."}]',
                '[{"name":"Rejuvenation", "desc":"If destroyed, it regains full HP in 1 hour unless holy water or dispel magic is used."}]',
                'Arcana +3, Perception +2'
            ),
            (
                'flesh-golem', 'Flesh Golem', 'Medium', 'construct', null, 'neutral',
                9, 93, '11d8+44', '{"walk":"30 ft."}', 1800,
                19, 9, 18, 6, 10, 5,
                ARRAY['A stitched-together monstrosity animated by lightning.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."}]',
                '[]',
                ''
            ),
            (
                'flying-snake', 'Flying Snake', 'Tiny', 'beast', null, 'unaligned',
                14, 5, '2d4', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 25,
                4, 18, 11, 2, 12, 5,
                ARRAY['A brightly scaled snake with wings.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 1 piercing damage + 3 (1d6) poison damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'frog', 'Frog', 'Tiny', 'beast', null, 'unaligned',
                11, 1, '1d4-1', '{"swim":"20 ft.","walk":"20 ft."}', 10,
                1, 13, 8, 1, 8, 3,
                ARRAY['A small amphibian with a long tongue.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."}]',
                '[]',
                'Perception +1, Stealth +3'
            ),
            (
                'frost-giant', 'Frost Giant', 'Huge', 'giant', null, 'neutral evil',
                15, 138, '12d12+60', '{"walk":"40 ft."}', 3900,
                23, 9, 21, 9, 10, 12,
                ARRAY['An imposing warrior from the icy north.'],
                '[{"name":"Greataxe", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage."}]',
                '[]',
                'Athletics +9, Perception +3'
            ),
            (
                'galeb-duhr', 'Galeb Duhr', 'Medium', 'elemental', null, 'neutral',
                16, 85, '9d8+45', '{"burrow":"15 ft.","walk":"15 ft."}', 1800,
                20, 8, 20, 11, 12, 11,
                ARRAY['A boulder-shaped elemental that animates stones.'],
                '[{"name":"Slam", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'gargoyle', 'Gargoyle', 'Medium', 'elemental', null, 'chaotic evil',
                15, 52, '7d8+21', '{"fly":"60 ft.","walk":"30 ft."}', 450,
                15, 11, 16, 6, 11, 7,
                ARRAY['A winged stone predator that blends into buildings.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'gelatinous-cube', 'Gelatinous Cube', 'Large', 'ooze', null, 'unaligned',
                6, 84, '8d10+40', '{"climb":"15 ft.","walk":"15 ft."}', 1800,
                14, 3, 20, 1, 6, 1,
                ARRAY['A near-invisible cube of ooze that engulfs its prey.'],
                '[{"name":"Pseudopod", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage."}]',
                '[]',
                ''
            ),
            (
                'ghast', 'Ghast', 'Medium', 'undead', null, 'chaotic evil',
                13, 36, '8d8', '{"walk":"30 ft."}', 450,
                16, 17, 10, 11, 10, 8,
                ARRAY['A more powerful and vile version of a ghoul.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus paralysis."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'ghost', 'Ghost', 'Medium', 'undead', null, 'any alignment',
                11, 45, '10d8', '{"fly":"40 ft.","hover":true}', 1100,
                7, 13, 10, 10, 12, 17,
                ARRAY['The spectral remains of a deceased being.'],
                '[{"name":"Withering Touch", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage."}]',
                '[{"name":"Possession", "desc":"The ghost can possess a humanoid within 5 ft. (Cha save DC 13)."}]',
                'Stealth +4, Perception +5'
            ),
            (
                'ghoul', 'Ghoul', 'Medium', 'undead', null, 'chaotic evil',
                12, 22, '5d8', '{"walk":"30 ft."}', 200,
                13, 15, 10, 7, 10, 6,
                ARRAY['A feral undead that paralyzes its victims.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage and paralysis (DC 10)."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'giant-ape', 'Giant Ape', 'Huge', 'beast', null, 'unaligned',
                12, 157, '15d12+60', '{"climb":"40 ft.","walk":"40 ft."}', 7000,
                23, 14, 18, 7, 12, 7,
                ARRAY['A massive, powerful primate.'],
                '[{"name":"Fist", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 5) bludgeoning damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'giant-badger', 'Giant Badger', 'Medium', 'beast', null, 'unaligned',
                10, 13, '2d8+4', '{"burrow":"10 ft.","walk":"30 ft."}', 50,
                13, 10, 15, 2, 12, 5,
                ARRAY['A burrowing creature with a fierce temperament.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-bat', 'Giant Bat', 'Large', 'beast', null, 'unaligned',
                13, 22, '4d10', '{"fly":"60 ft."}', 200,
                15, 16, 11, 2, 12, 6,
                ARRAY['A massive bat that uses echolocation.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-boar', 'Giant Boar', 'Large', 'beast', null, 'unaligned',
                12, 42, '5d10+15', '{"walk":"40 ft."}', 450,
                17, 10, 16, 2, 7, 5,
                ARRAY['An oversized wild boar with deadly tusks.'],
                '[{"name":"Tusk", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'giant-centipede', 'Giant Centipede', 'Small', 'beast', null, 'unaligned',
                13, 4, '1d6+1', '{"climb":"30 ft.","walk":"30 ft."}', 50,
                5, 14, 12, 1, 7, 3,
                ARRAY['A fast, venomous centipede of unusual size.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 7 (3d4) poison damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'giant-constrictor-snake', 'Giant Constrictor Snake', 'Huge', 'beast', null, 'unaligned',
                12, 60, '8d12+16', '{"swim":"30 ft.","walk":"30 ft."}', 700,
                19, 14, 12, 1, 10, 3,
                ARRAY['A massive snake that crushes prey.'],
                '[{"name":"Constrict", "desc":"Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage and grapple (escape DC 16)."}]',
                '[]',
                ''
            ),
            (
                'giant-crab', 'Giant Crab', 'Medium', 'beast', null, 'unaligned',
                15, 13, '3d8+3', '{"swim":"30 ft.","walk":"30 ft."}', 200,
                13, 15, 11, 1, 9, 3,
                ARRAY['An oversized crab with strong pincers.'],
                '[{"name":"Claw", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 2) bludgeoning damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'giant-crocodile', 'Giant Crocodile', 'Huge', 'beast', null, 'unaligned',
                14, 85, '9d12+27', '{"swim":"50 ft.","walk":"30 ft."}', 3900,
                21, 9, 17, 2, 10, 7,
                ARRAY['A terrifying apex predator of the swamp.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage."}]',
                '[]',
                'Stealth +5'
            ),
            (
                'giant-eagle', 'Giant Eagle', 'Large', 'beast', null, 'neutral good',
                13, 26, '4d10+4', '{"fly":"80 ft.","walk":"10 ft."}', 450,
                16, 17, 13, 8, 14, 10,
                ARRAY['A majestic and intelligent bird of prey.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'giant-elk', 'Giant Elk', 'Huge', 'beast', null, 'unaligned',
                14, 42, '5d12+10', '{"walk":"60 ft."}', 1100,
                19, 16, 14, 7, 14, 10,
                ARRAY['A towering elk with massive antlers.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'giant-fire-beetle', 'Giant Fire Beetle', 'Small', 'beast', null, 'unaligned',
                13, 4, '1d6+1', '{"walk":"30 ft."}', 50,
                8, 10, 12, 1, 7, 3,
                ARRAY['A beetle that glows brightly in the dark.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage."}]',
                '[]',
                ''
            ),
            (
                'giant-frog', 'Giant Frog', 'Medium', 'beast', null, 'unaligned',
                11, 18, '4d8', '{"swim":"30 ft.","walk":"30 ft."}', 50,
                12, 13, 11, 2, 10, 3,
                ARRAY['An oversized frog with a sticky tongue.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'giant-goat', 'Giant Goat', 'Large', 'beast', null, 'unaligned',
                11, 19, '3d10+3', '{"walk":"40 ft."}', 100,
                17, 11, 12, 3, 12, 6,
                ARRAY['A larger, tougher breed of goat with a deadly charge.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-hyena', 'Giant Hyena', 'Large', 'beast', null, 'unaligned',
                12, 45, '6d10+12', '{"walk":"50 ft."}', 450,
                16, 14, 14, 2, 12, 7,
                ARRAY['An oversized scavenger with a terrifying bite.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-lizard', 'Giant Lizard', 'Large', 'beast', null, 'unaligned',
                12, 19, '3d10+3', '{"climb":"30 ft.","walk":"30 ft."}', 100,
                15, 12, 13, 2, 10, 5,
                ARRAY['A large lizard that climbs walls easily.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."}]',
                '[]',
                'Stealth +4'
            ),
            (
                'giant-octopus', 'Giant Octopus', 'Large', 'beast', null, 'unaligned',
                11, 52, '8d10+8', '{"swim":"60 ft."}', 1800,
                17, 16, 13, 4, 10, 4,
                ARRAY['A tentacled predator that lurks in the deep.'],
                '[{"name":"Tentacles", "desc":"Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage and grapple."}]',
                '[]',
                'Perception +4, Stealth +5'
            ),
            (
                'giant-owl', 'Giant Owl', 'Large', 'beast', null, 'neutral',
                12, 19, '3d10+3', '{"fly":"60 ft.","walk":"5 ft."}', 700,
                13, 15, 12, 8, 13, 10,
                ARRAY['A noble and wise predator of the forest.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage."}]',
                '[]',
                'Perception +5, Stealth +4'
            ),
            (
                'giant-poisonous-snake', 'Giant Poisonous Snake', 'Medium', 'beast', null, 'unaligned',
                14, 11, '2d8', '{"swim":"30 ft.","walk":"30 ft."}', 100,
                10, 18, 13, 2, 10, 3,
                ARRAY['A fast-moving serpent with lethal venom.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 4 (1d4 + 2) piercing damage + 10 (3d6) poison damage."}]',
                '[]',
                'Perception +2, Stealth +6'
            ),
            (
                'giant-rat', 'Giant Rat', 'Small', 'beast', null, 'unaligned',
                12, 7, '2d6', '{"walk":"30 ft."}', 25,
                7, 15, 11, 2, 10, 4,
                ARRAY['A verminous rodent of unusual size.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."}]',
                '[]',
                'Perception +2, Stealth +4'
            ),
            (
                'giant-scorpion', 'Giant Scorpion', 'Large', 'beast', null, 'unaligned',
                15, 52, '7d10+14', '{"walk":"40 ft."}', 1800,
                15, 13, 15, 1, 9, 3,
                ARRAY['A venomous predator with pincers and a deadly stinger.'],
                '[{"name":"Sting", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing + poison."}]',
                '[]',
                'Stealth +2'
            ),
            (
                'giant-sea-horse', 'Giant Sea Horse', 'Large', 'beast', null, 'unaligned',
                13, 16, '3d10', '{"swim":"40 ft."}', 100,
                12, 15, 11, 2, 12, 5,
                ARRAY['A large aquatic creature resembling a seahorse.'],
                '[{"name":"Ram", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-shark', 'Giant Shark', 'Huge', 'beast', null, 'unaligned',
                13, 126, '11d12+55', '{"swim":"50 ft."}', 5000,
                23, 11, 21, 1, 10, 5,
                ARRAY['A monstrous predator of the deep sea.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 30 (4d10 + 8) piercing damage."}]',
                '[]',
                'Perception +3'
            ),
            (
                'giant-spider', 'Giant Spider', 'Large', 'beast', null, 'unaligned',
                14, 26, '4d10+4', '{"climb":"30 ft.","walk":"30 ft."}', 450,
                14, 16, 12, 2, 11, 4,
                ARRAY['A venomous spider the size of a horse.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing + poison (DC 11)."}]',
                '[]',
                'Stealth +7'
            ),
            (
                'giant-toad', 'Giant Toad', 'Large', 'beast', null, 'unaligned',
                11, 39, '6d10+6', '{"swim":"40 ft.","walk":"30 ft."}', 900,
                15, 13, 13, 2, 10, 3,
                ARRAY['A huge amphibian with a sticky tongue and a wide maw.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing and swallowed."}]',
                '[]',
                'Perception +2'
            ),
            (
                'giant-vulture', 'Giant Vulture', 'Large', 'beast', null, 'neutral evil',
                10, 22, '3d10+6', '{"fly":"60 ft.","walk":"10 ft."}', 450,
                15, 10, 15, 6, 12, 7,
                ARRAY['A carrion bird with a large wingspan and cruel instincts.'],
                '[{"name":"Beak", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'giant-wasp', 'Giant Wasp', 'Medium', 'beast', null, 'unaligned',
                12, 13, '3d8', '{"fly":"50 ft.","walk":"10 ft."}', 100,
                10, 14, 10, 1, 10, 3,
                ARRAY['An enlarged wasp with a deadly sting.'],
                '[{"name":"Sting", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage + 10 (3d6) poison."}]',
                '[]',
                'Perception +2'
            ),
            (
                'giant-weasel', 'Giant Weasel', 'Medium', 'beast', null, 'unaligned',
                13, 9, '2d8', '{"walk":"40 ft."}', 50,
                11, 16, 10, 4, 12, 5,
                ARRAY['A ferocious predator that hunts in packs.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}]',
                '[]',
                'Perception +3, Stealth +6'
            ),
            (
                'giant-wolf-spider', 'Giant Wolf Spider', 'Medium', 'beast', null, 'unaligned',
                13, 11, '2d8+2', '{"climb":"40 ft.","walk":"40 ft."}', 100,
                12, 16, 13, 3, 12, 4,
                ARRAY['A skittering ambusher with venomous fangs.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing + poison (DC 11)."}]',
                '[]',
                'Perception +3, Stealth +7'
            ),
            (
                'gibbering-mouther', 'Gibbering Mouther', 'Medium', 'aberration', null, 'neutral',
                9, 67, '9d8+27', '{"burrow":"10 ft.","walk":"10 ft."}', 1800,
                10, 8, 16, 3, 10, 6,
                ARRAY['A horrific creature composed of mouths and eyes.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'glabrezu', 'Glabrezu', 'Large', 'fiend', 'demon', 'chaotic evil',
                17, 157, '15d10+75', '{"walk":"40 ft."}', 10000,
                20, 15, 21, 19, 17, 16,
                ARRAY['A four-armed demon that tempts with power.'],
                '[{"name":"Pincer", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage."}]',
                '[{"name":"Power Word Stun", "desc":"The glabrezu casts this as an innate spell."}]',
                'Deception +8, Insight +7, Perception +7'
            ),
            (
                'gnoll', 'Gnoll', 'Medium', 'humanoid', 'gnoll', 'chaotic evil',
                15, 22, '5d8', '{"walk":"30 ft."}', 100,
                14, 12, 11, 6, 10, 7,
                ARRAY['A savage hyena-like humanoid.'],
                '[{"name":"Spear", "desc":"Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'gnome', 'Gnome', 'Small', 'humanoid', 'gnome', 'any alignment',
                15, 9, '2d6+2', '{"walk":"25 ft."}', 50,
                8, 14, 10, 10, 11, 9,
                ARRAY['A curious and clever small humanoid.'],
                '[{"name":"Dagger", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."}]',
                '[]',
                'Investigation +2, Stealth +4'
            ),
            (
                'goblin', 'Goblin', 'Small', 'humanoid', 'goblinoid', 'neutral evil',
                15, 7, '2d6', '{"walk":"30 ft."}', 50,
                8, 14, 10, 10, 8, 8,
                ARRAY['A small, cunning humanoid scavenger.'],
                '[{"name":"Scimitar", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."}]',
                '[]',
                'Stealth +6'
            ),
            (
                'goblin-boss', 'Goblin Boss', 'Small', 'humanoid', 'goblinoid', 'neutral evil',
                17, 21, '6d6', '{"walk":"30 ft."}', 200,
                10, 14, 10, 10, 10, 10,
                ARRAY['A goblin who rules others through fear and force.'],
                '[{"name":"Multiattack", "desc":"Makes two melee attacks."}]',
                '[]',
                'Intimidation +2, Stealth +6'
            ),
            (
                'gold-dragon-wyrmling', 'Gold Dragon Wyrmling', 'Medium', 'dragon', null, 'lawful good',
                17, 60, '8d8+24', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 1800,
                19, 10, 17, 14, 11, 16,
                ARRAY['A young noble dragon with a breath of fire.'],
                '[{"name":"Fire Breath", "desc":"15 ft. cone, DC 13 Dex save."}]',
                '[]',
                'Perception +4, Stealth +2'
            ),
            (
                'gorgon', 'Gorgon', 'Large', 'monstrosity', null, 'unaligned',
                19, 114, '12d10+48', '{"walk":"40 ft."}', 2300,
                20, 11, 18, 2, 12, 7,
                ARRAY['A bull-like creature that can turn foes to stone with its breath.'],
                '[{"name":"Petrifying Breath", "desc":"30 ft. cone, DC 13 Con save."}]',
                '[]',
                ''
            ),
            (
                'gray-ooze', 'Gray Ooze', 'Medium', 'ooze', null, 'unaligned',
                8, 22, '3d8+9', '{"climb":"10 ft.","walk":"10 ft."}', 100,
                12, 6, 16, 1, 6, 2,
                ARRAY['An acidic blob that dissolves flesh and metal.'],
                '[{"name":"Pseudopod", "desc":"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning + 4 (1d8) acid."}]',
                '[]',
                'Stealth +2'
            ),
            (
                'green-dragon-wyrmling', 'Green Dragon Wyrmling', 'Medium', 'dragon', null, 'lawful evil',
                17, 38, '7d8', '{"fly":"60 ft.","swim":"30 ft.","walk":"30 ft."}', 700,
                15, 12, 13, 14, 11, 13,
                ARRAY['A young forest-dwelling dragon with a poisonous breath.'],
                '[{"name":"Poison Breath", "desc":"15 ft. cone, DC 11 Con save."}]',
                '[]',
                'Perception +4, Stealth +4'
            ),
            (
                'green-hag', 'Green Hag', 'Medium', 'fey', null, 'neutral evil',
                17, 82, '11d8+33', '{"walk":"30 ft."}', 1800,
                18, 12, 16, 13, 14, 14,
                ARRAY['A wicked fey who delights in cruelty and deception.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."}]',
                '[]',
                'Arcana +3, Deception +6, Perception +3'
            ),
            (
                'griffon', 'Griffon', 'Large', 'monstrosity', null, 'unaligned',
                12, 59, '7d10+21', '{"fly":"80 ft.","walk":"30 ft."}', 1100,
                18, 15, 16, 2, 13, 8,
                ARRAY['A winged beast with the body of a lion and head of an eagle.'],
                '[{"name":"Multiattack", "desc":"Makes two attacks: one with beak and one with claws."}]',
                '[]',
                'Perception +5'
            ),
            (
                'grimlock', 'Grimlock', 'Medium', 'humanoid', 'grimlock', 'neutral evil',
                11, 11, '2d8', '{"walk":"30 ft."}', 25,
                16, 12, 12, 10, 8, 6,
                ARRAY['Blind cave-dwellers with keen hearing and smell.'],
                '[{"name":"Spiked Bone Club", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."}]',
                '[]',
                'Perception +3, Stealth +5'
            ),
            (
                'guard', 'Guard', 'Medium', 'humanoid', 'any race', 'any alignment',
                16, 11, '2d8+2', '{"walk":"30 ft."}', 25,
                13, 12, 12, 10, 11, 10,
                ARRAY['A trained soldier or city watchman.'],
                '[{"name":"Spear", "desc":"Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage."}]',
                '[]',
                'Athletics +2'
            ),
            (
                'guardian-naga', 'Guardian Naga', 'Large', 'monstrosity', null, 'lawful good',
                18, 127, '15d10+45', '{"swim":"40 ft.","walk":"40 ft."}', 7200,
                19, 18, 17, 16, 19, 21,
                ARRAY['A benevolent serpent guardian with divine magic.'],
                '[{"name":"Bite", "desc":"Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing + 18 (4d8) poison."}]',
                '[]',
                'Insight +8, Religion +7'
            ),
            (
                'gynosphinx', 'Gynosphinx', 'Large', 'monstrosity', null, 'lawful neutral',
                17, 136, '16d10+48', '{"fly":"60 ft.","walk":"40 ft."}', 7200,
                18, 17, 16, 18, 17, 18,
                ARRAY['A regal sphinx that guards ancient secrets.'],
                '[{"name":"Claw", "desc":"Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13 (2d10 + 2) slashing damage."}]',
                '[{"name":"Legendary Resistance", "desc":"Can succeed on a failed saving throw 3/day."}]',
                'Arcana +9, History +9, Perception +10'
            ),
            (
                'half-ogre', 'Half-Ogre', 'Large', 'giant', null, 'neutral evil',
                12, 30, '4d10+8', '{"walk":"30 ft."}', 450,
                19, 8, 14, 6, 10, 7,
                ARRAY['A brutish mix of ogre and human bloodlines.'],
                '[{"name":"Battleaxe", "desc":"Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage."}]',
                '[]',
                'Intimidation +2'
            ),
            (
                'harpy', 'Harpy', 'Medium', 'monstrosity', null, 'chaotic evil',
                11, 38, '7d8', '{"fly":"40 ft.","walk":"20 ft."}', 200,
                12, 13, 12, 7, 10, 13,
                ARRAY['A winged creature with a deadly enchanting song.'],
                '[{"name":"Claws", "desc":"Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage."}]',
                '[]',
                'Perception +2'
            ),
            (
                'hawk', 'Hawk', 'Tiny', 'beast', null, 'unaligned',
                13, 1, '1d4-1', '{"fly":"60 ft.","walk":"5 ft."}', 10,
                5, 16, 8, 2, 14, 6,
                ARRAY['A sharp-eyed raptor that soars above its prey.'],
                '[{"name":"Talons", "desc":"Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage."}]',
                '[]',
                'Perception +4'
            ),
            (
                'hell-hound', 'Hell Hound', 'Medium', 'fiend', 'devil', 'lawful evil',
                15, 45, '7d8+14', '{"walk":"50 ft."}', 1100,
                17, 12, 14, 6, 13, 6,
                ARRAY['A fiery canine from the lower planes.'],
                '[{"name":"Fire Breath", "desc":"15 ft. cone, DC 12 Dex save, 21 (6d6) fire damage."}]',
                '[]',
                'Perception +4, Stealth +5'
            ),
            (
                'hezrou', 'Hezrou', 'Large', 'fiend', 'demon', 'chaotic evil',
                16, 136, '13d10+65', '{"walk":"30 ft."}', 3900,
                19, 17, 20, 5, 12, 13,
                ARRAY['A foul-smelling toad-like demon of brute force.'],
                '[{"name":"Multiattack", "desc":"Makes three attacks: one with bite and two with claws."}]',
                '[]',
                'Perception +4'
            )
            `);
        console.log('✅ Monsters seeded successfully!');
  } catch (err) {
    console.error('❌ Error seeding monsters: ', err);
  }
}

seedMonsters();
