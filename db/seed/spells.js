export async function seedSpells() {
  try {
    await db.query('TRUNCATE spell_list RESTART IDENTITY CASCADE');

    // Map schools.slug -> id
    const { rows: schools } = await db.query('SELECT id, index FROM spell_schools');
    const schoolMap = Object.fromEntries(schools.map(s => [s.index, s.id]));

    const spells = [
      // === Batch 1 spells here ===
      // === Batch 2 spells here ===
      // === Batch 3, 4, etc. ===
    ];

    for (const s of spells) {
      const schoolId = schoolMap[s.school];
      if (!schoolId) {
        console.warn(`⚠️ Missing school in spell_schools: ${s.school}`);
        continue;
      }
      await db.query(
        `INSERT INTO spell_list
          (index, name, level, school_id, casting_time, range, components, material,
           duration, description, higher_level, ritual, concentration)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
        [
          s.index, s.name, s.level, schoolId, s.casting_time, s.range,
          s.components, s.material, s.duration, s.description, s.higher_level,
          s.ritual, s.concentration
        ]
      );
    }

    console.log('✅ SRD spells seeded!');
  } catch (err) {
    console.error('❌ Error seeding spells:', err);
  }
}

seedSpells();