DROP TABLE IF EXISTS characters;

CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

  -- CHARACTER DETAILS
  name TEXT NOT NULL,
  age INTEGER,
  alignment TEXT,
  appearance TEXT,
  faction TEXT,
  deity TEXT,

  -- BUILD CHARACTER
  race TEXT,
  char_class TEXT,
  ability_scores JSONB,

  -- SPELLS & EQUIPTMENT
  spell_list TEXT[], -- optional array
  equiptment_list TEXT[],


-- BACKSTORY
  hometown TEXT,
  backstory TEXT,
  motivation TEXT,
  full_story TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);