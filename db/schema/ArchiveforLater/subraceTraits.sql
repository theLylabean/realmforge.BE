CREATE TABLE subspecies_traits (
  subspecies_slug TEXT REFERENCES subspecies(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  trait_slug   TEXT REFERENCES traits(slug)   ON DELETE CASCADE,
  PRIMARY KEY (subspecies_slug, trait_slug)
);