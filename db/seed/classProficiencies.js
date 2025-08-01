import db from '../client.js';

export async function seedClassProficiencies() {
  try {
    // Get all class IDs
    const classes = await db.query(`SELECT id, name FROM char_class`);
    const profs = await db.query(`SELECT id, index FROM proficiencies`);

    const profMap = Object.fromEntries(profs.rows.map(p => [p.index, p.id]));
    const classMap = Object.fromEntries(classes.rows.map(c => [c.name.toLowerCase(), c.id]));

    const inserts = [];

    // Fighter
    inserts.push(
      { class_id: classMap['fighter'], proficiency_id: profMap['light-armor'] },
      { class_id: classMap['fighter'], proficiency_id: profMap['medium-armor'] },
      { class_id: classMap['fighter'], proficiency_id: profMap['heavy-armor'] },
      { class_id: classMap['fighter'], proficiency_id: profMap['shields'] }
    );

    // Rogue
    inserts.push(
      { class_id: classMap['rogue'], proficiency_id: profMap['light-armor'] }
    );

    // Cleric
    inserts.push(
      { class_id: classMap['cleric'], proficiency_id: profMap['light-armor'] },
      { class_id: classMap['cleric'], proficiency_id: profMap['medium-armor'] },
      { class_id: classMap['cleric'], proficiency_id: profMap['shields'] }
    );

    // Wizard has no armor proficiencies

    for (const row of inserts) {
      await db.query(
        `INSERT INTO class_proficiencies (class_id, proficiency_id)
         VALUES ($1, $2)
         ON CONFLICT DO NOTHING`,
        [row.class_id, row.proficiency_id]
      );
    }
    console.log('✅ class_proficiencies seeded!');
  } catch (err) {
    console.error('❌ Error seeding class_proficiencies:', err);
  }
}