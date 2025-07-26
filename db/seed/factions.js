import db from '../client.js';

export async function factionSeed() {
    try {
        await db.query('TRUNCATE factions RESTART IDENTITY CASCADE');
        await db.query(`
            INSERT INTO factions (name, description) VALUES
            (
        'The Harpers',
        'A secretive group that fights for equality and justice through information, subterfuge, and espionage.'
    ),
            (
        'The Zhentarim',
        'A shadowy mercenary organization that pursues wealth and influence through force, fear, and black market deals.'
    ),
            (
        'The Emerald Enclave',
        'Guardians of the natural world who seek to preserve the balance between civilization and nature.'
    ),
            (
        'The Lords'' Alliance',
        'A coalition of city-states and powerful leaders working together to ensure the safety and stability of the realm.'
    ),
            (
        'The Order of the Gauntlet',
        'A righteous force of paladins and clerics who dedicate their lives to fighting evil and protecting the innocent.'
    )
        `);
        console.log("✅ Factions seeded successfully.");
    } catch (error) {
        console.error("❌ Error seeding factions:", error);
    }
}