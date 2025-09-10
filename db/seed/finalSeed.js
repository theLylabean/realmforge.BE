import pg from "pg";
import dotenv from "dotenv";
dotenv.config();


import db from "../client.js";
import { seedAbilityScores } from "./abilityScores.js";
import { seedArmor } from "./armor.js";
import { seedArmorProficiencies } from "./armorProficiencies.js";
import { seedCharacters } from "./characters.js";
import { seedCharClass } from "./classes.js";
import { seedClassProficiencies } from "./classProficiencies.js";
import { seedDeities } from "./deities.js";
import { seedEquipmentList } from "./equipment.js";
import { seedEquipmentCategories } from "./equipmentCat.js";
import { seedFactions } from "./factions.js";
import { seedFeats } from "./feats.js";

async function runSeeds() {
  try {
    await seedAbilityScores();
    await seedArmor();
    await seedArmorProficiencies();
    await seedCharacters();
    await seedCharClass();
    await seedClassProficiencies();
    await seedDeities();
    await seedEquipmentList();
    await seedEquipmentCategories();
    await seedFactions();
    await seedFeats();
    await seed

    console.log("🌱 All seed data inserted successfully!");
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    await db.end();
  }
}

runSeeds();
