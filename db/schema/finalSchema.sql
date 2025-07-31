-- Drop all tables in dependency order
\i db/schema/dropTables.sql

-- Create all tables (dependency order)
\i db/schema/users.sql;
\i db/schema/classes.sql;
\i db/schema/subclasses.sql;
\i db/schema/equipmentCat.sql;
\i db/schema/equipment.sql;
\i db/schema/equipmentPacks.sql;
\i db/schema/races.sql;
\i db/schema/subraces.sql;
\i db/schema/traits.sql;
\i db/schema/weapons.sql;
\i db/schema/weaponProperties.sql;
\i db/schema/spellSchools.sql;
\i db/schema/proficiencies.sql;
\i db/schema/abilityScores.sql;
\i db/schema/armor.sql;
\i db/schema/characters.sql;
\i db/schema/classProficiencies.sql;
\i db/schema/deities.sql;
\i db/schema/factions.sql;
\i db/schema/feats.sql;
\i db/schema/features.sql;
\i db/schema/languages.sql;
\i db/schema/magicItems.sql;
\i db/schema/monsters.sql;
\i db/schema/packItems.sql;
\i db/schema/properties.sql;
\i db/schema/raceTraits.sql;
\i db/schema/spells.sql;
\i db/schema/subraceTraits.sql;
\i db/schema/tools.sql;
\i db/schema/weaponPropertyAssign.sql;
