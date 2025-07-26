import db from '../client.js';

export async function deitySeed() {
    try {
        await db.query('TRUNCATE deities RESTART IDENTITY CASCADE');
        await db.query(`
            INSERT INTO deities (name, alignment, domain, description) VALUES
            (
        'Bahamut', 'Lawful Good',
        ARRAY['Justice', 'Protection', 'Nobility', 'Good'],
        'The Platinum Dragon, embodiment of justice, mercy, and wisdom. Revered by good dragons and paladins.'
    ),
            (
        'Tiamat', 'Chaotic Evil',
        ARRAY['Destruction', 'Dragon', 'Evil', 'Greed', 'Hatred', 'Trickery', 'Tyranny'],
        'Five-headed queen of evil dragons, embodiment of greed and malice, supreme matron of chromatics.'
    ),
            (
        'Corellon Larethian', 'Chaotic Good',
        ARRAY['Chaos', 'Good', 'Protection', 'War'],
        'Patron god of elves, protector of magic, art, and beauty. Creator of the elven race.'
    ),
            (
        'Gruumsh', 'Chaotic Evil',
        ARRAY['Tempest', 'War'],
        'Orc god of storms and war, eternal enemy of Corellon and leader of the orcish pantheon.'
    ),
            (
        'Eilistraee', 'Chaotic Good',
        ARRAY['Life', 'Light', 'Nature'],
        'The Dark Maiden, drow goddess of song, beauty, and moonlight. Leads drow toward redemption.'
    ),
            (
        'Helm', 'Lawful Neutral',
        ARRAY['Life', 'Light', 'Twilight'],
        'The Vigilant One, god of guardians and protection. Watches over those who safeguard others.'
    ),
            (
        'Ilmater', 'Lawful Good',
        ARRAY['Life', 'Twilight'],
        'The Crying God, patron of endurance, suffering, and compassion. Protector of the oppressed.'
    ),
            (
        'Mystra', 'Neutral Good',
        ARRAY['Arcana', 'Knowledge'],
        'Goddess of magic and the Weave. Preserves and teaches the responsible use of arcane power.'
    ),
            (
        'Selûne', 'Chaotic Good',
        ARRAY['Knowledge', 'Life', 'Twilight'],
        'The Lady of Silver, goddess of the moon, stars, and navigation. Eternal rival of Shar.'
    ),
            (
        'Shar', 'Neutral Evil',
        ARRAY['Death', 'Trickery'],
        'Mistress of the Night, goddess of darkness and loss. Twin sister of Selûne.'
    ),
            (
        'Tempus', 'True Neutral',
        ARRAY['War'],
        'Lord of Battles, god of honorable war. Patron of warriors and soldiers.'
    ),
            (
        'Tymora', 'Chaotic Good',
        ARRAY['Trickery'],
        'Lady Luck, goddess of fortune, adventure, and bold action. Opposed by Beshaba.'
    ),
            (
        'Tharizdun', 'Chaotic Evil',
        ARRAY['Darkness', 'Eternal Darkness'],
        'The Chained God, an ancient evil of entropy and destruction, sealed away from the world.'
    ),
            (
        'Bane', 'Lawful Evil',
        ARRAY['War', 'Tyranny'],
        'God of fear, hatred, and tyranny. Commands obedience and rules with an iron fist.'
    ),
            (
        'Lathander', 'Neutral Good',
        ARRAY['Life', 'Light'],
        'Morninglord of renewal, birth, and vitality. Patron of spring and new beginnings.'
    ),
            (
        'Torm', 'Lawful Good',
        ARRAY['Order', 'War'],
        'The True, god of duty, loyalty, and righteousness. Often worshipped by paladins and guards.'
    ),
            (
        'Tyr', 'Lawful Good',
        ARRAY['Justice', 'Law'],
        'The Even-Handed, god of justice and law. Known for his missing hand and unwavering fairness.'
    ),
            (
        'Vecna', 'Neutral Evil',
        ARRAY['Death', 'Knowledge'],
        'Lich god of secrets, undeath, and forbidden magic. Feared and worshipped by necromancers.'
    ),
            (
        'Wee Jas', 'Lawful Neutral',
        ARRAY['Death', 'Arcana'],
        'Goddess of death and magic. Known for her cold logic and reverence for law and order.'
    ),
            (
        'Moradin', 'Lawful Good',
        ARRAY['Creation', 'Knowledge', 'Forge'],
        'Dwarven god of creation and smithing. Father of dwarves and patron of artisans.'
    ),
            (
        'Kelemvor', 'Lawful Neutral',
        ARRAY['Death', 'Grave'],
        'Judge of the Dead, god of death who promotes acceptance and fair judgment in the afterlife.'
    ),
            (
        'Lolth', 'Chaotic Evil',
        ARRAY['Trickery', 'War'],
        'Drow goddess of spiders, lies, and chaos. Commands the dark and tyrannical aspects of drow society.'
    ),
            (
        'Ioun', 'Neutral',
        ARRAY['Knowledge', 'Arcana'],
        'Goddess of knowledge, skill, and prophecy. Guardian of ideas and lore.'
    ),
            (
        'Melora', 'Neutral',
        ARRAY['Nature', 'Tempest'],
        'Wild goddess of the sea and wilderness. Embodies the untamed forces of nature.'
    ),
            (
        'Kord', 'Chaotic Good',
        ARRAY['Storm', 'Strength'],
        'Brawler god of strength and storms. Revered by warriors, sailors, and competitors.'
    ),
            (
        'Obad-Hai', 'True Neutral',
        ARRAY['Nature'],
        'Shalm, god of nature, balance, and the four seasons. Patron of druids and hermits.'
    ),
            (
        'Ehlonna', 'Neutral Good',
        ARRAY['Nature', 'Life'],
        'Goddess of woodlands and fertility. Protector of unicorns, forests, and natural beauty.'
    ),
            (
        'Boccob', 'True Neutral',
        ARRAY['Knowledge', 'Arcana'],
        'The Uncaring, god of magic and foresight. Believes in the balance of power.'
    ),
            (
        'Pholtus', 'Lawful Good',
        ARRAY['Light', 'Law'],
        'Zealous god of law and order. Upholder of rigid codes and absolute truth.'
    ),
            (
        'Rao', 'Lawful Good',
        ARRAY['Peace', 'Knowledge'],
        'Calm god of reason, serenity, and peace. His worship promotes diplomacy and understanding.'
    ),
            (
        'Celestian', 'True Neutral',
        ARRAY['Stars', 'Travel'],
        'Wanderer god of stars, space, and journeys. Patron of astrologers and planewalkers.'
    ),
            (
        'Erythnul', 'Chaotic Evil',
        ARRAY['Destruction', 'War'],
        'Bloody god of slaughter and chaos. Worshipped by brutal raiders and berserkers.'
    ),
            (
        'Heironeous', 'Lawful Good',
        ARRAY['War', 'Valor'],
        'Chivalrous god of justice and honor. Opposes his brother Hextor in an eternal rivalry.'
    ),
            (
        'Hextor', 'Lawful Evil',
        ARRAY['War', 'Tyranny'],
        'God of conquest and tyranny. Commands armies to subjugate the weak and crush resistance.'
    ),
            (
        'Nerull', 'Neutral Evil',
        ARRAY['Death'],
        'Reaper of souls, dark god of death and the grave. Feared for his dominion over the end of life.'
    )
        `);
        console.log("✅ Deities seeded successfully.");
    } catch (error) {
        console.error("❌ Error seeding deities:", error);
    }
}