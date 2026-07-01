CREATE TABLE subrace_traits (
  subrace_slug TEXT REFERENCES subraces(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  trait_slug   TEXT REFERENCES traits(slug)   ON DELETE CASCADE,
  PRIMARY KEY (subrace_slug, trait_slug)
);