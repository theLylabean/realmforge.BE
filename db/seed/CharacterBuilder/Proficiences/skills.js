import db from "../../../client";

export async function seedSkills() {
    try {
        await db.query('TRUNCATE skills RESTART IDENTITY CASCADE');
        const skillAbilityRel = (await db.query (`SELECT id FROM `))
    }
}