CREATE TYPE speed_mode AS ENUM ('walk','swim','fly','climb','burrow');

CREATE TABLE race_speeds (
  race_slug TEXT       REFERENCES races(slug) ON DELETE CASCADE,
  mode      speed_mode NOT NULL,
  feet      SMALLINT   NOT NULL,
  PRIMARY KEY (race_slug, mode)
);