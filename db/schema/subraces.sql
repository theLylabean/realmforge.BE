CREATE TABLE subraces (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,                            -- e.g., 'high-elf'
  race_slug TEXT REFERENCES races(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  name TEXT NOT NULL,
  description TEXT[] NOT NULL,
  UNIQUE (race_slug, name)
);