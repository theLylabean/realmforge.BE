CREATE TYPE speed_mode AS ENUM ('walk','swim','fly','climb','burrow');

CREATE TABLE species_speeds (
  species_slug TEXT       REFERENCES species(slug) ON DELETE CASCADE,
  mode      speed_mode NOT NULL,
  feet      SMALLINT   NOT NULL,
  PRIMARY KEY (species_slug, mode)
);