CREATE TABLE race_traits (
  race_slug  TEXT REFERENCES races(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  trait_slug TEXT REFERENCES traits(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (race_slug, trait_slug)
);