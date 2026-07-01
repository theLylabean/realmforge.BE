-- enums.sql

-- Core abilities
DO $$ BEGIN
  CREATE TYPE ability AS ENUM ('STR','DEX','CON','INT','WIS','CHA');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- -- Movement modes
-- DO $$ BEGIN
--   CREATE TYPE speed_mode AS ENUM ('walk','swim','fly','climb','burrow');
-- EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- -- (Optional) Sizes
-- DO $$ BEGIN
--   CREATE TYPE creature_size AS ENUM ('Tiny','Small','Medium','Large','Huge','Gargantuan');
-- EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- (Optional) Alignments (only if you want to constrain them)
DO $$ BEGIN
  CREATE TYPE alignment AS ENUM (
    'Lawful Good','Neutral Good','Chaotic Good',
    'Lawful Neutral','True Neutral','Chaotic Neutral',
    'Lawful Evil','Neutral Evil','Chaotic Evil','Unaligned'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
