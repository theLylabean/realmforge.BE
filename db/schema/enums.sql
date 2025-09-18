-- enums.sql

-- Core abilities
DO $$ BEGIN
  CREATE TYPE ability AS ENUM ('STR','DEX','CON','INT','WIS','CHA');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Movement modes
DO $$ BEGIN
  CREATE TYPE speed_mode AS ENUM ('walk','swim','fly','climb','burrow');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- (Optional) Sizes
DO $$ BEGIN
  CREATE TYPE creature_size AS ENUM ('Tiny','Small','Medium','Large','Huge','Gargantuan');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- (Optional) Alignments (only if you want to constrain them)
DO $$ BEGIN
  CREATE TYPE alignment AS ENUM (
    'lawful good','neutral good','chaotic good',
    'lawful neutral','neutral','chaotic neutral',
    'lawful evil','neutral evil','chaotic evil','unaligned','any'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
