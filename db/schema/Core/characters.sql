CREATE TABLE characters (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,

  -- ========================================
  -- PAGE 1: IDENTITY
  -- ========================================

  name TEXT NOT NULL,
  age INTEGER,
  level INTEGER DEFAULT 1,
  alignment TEXT,
  
  species_id INTEGER REFERENCES species(id),
  class_id INTEGER REFERENCES classes(id),
  background_id INTEGER REFERENCES backgrounds(id),

  experiences_points INTEGER DEFAULT 0,

  -- ========================================
  -- PAGE 1: ABILITY SCORES
  -- ========================================

  ability_scores JSONB,

  -- ========================================
  -- PAGE 1: COMBAT
  -- ========================================

  armor_class INTEGER,
  speed INTEGER,

  hit_point_max INTEGER,
  current_hit_points INTEGER,

  -- ========================================
  -- PAGE 1: CHARACTER DETAILS
  -- ========================================

  appearance TEXT,

  personality_traits TEXT,
  ideals TEXT,
  bonds TEXT,
  flaws TEXT,

  -- ========================================
  -- PAGE 1: ATTACKS & EQUIPMENT
  -- ========================================

  spell_list TEXT[], -- optional array
  equipment_list TEXT[],

  -- ========================================
  -- PAGE 2: SPELLCASTING
  -- ========================================

  spellcasting_ability TEXT,
  spell_save_dc INTEGER,
  spell_attack_bonus INTEGER,

  -- ========================================
  -- PAGE 3: BACKSTORY
  -- ========================================

  hometown TEXT,
  backstory TEXT,
  motivation TEXT,
  full_story TEXT,

  allies TEXT,
  faction TEXT,
  deity TEXT,
  
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);