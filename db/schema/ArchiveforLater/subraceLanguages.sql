CREATE TABLE subspecies_language (
  subspecies_slug  TEXT REFERENCES subspecies(slug)  ON DELETE CASCADE ON UPDATE CASCADE,
  language_slug TEXT REFERENCES language(slug) ON DELETE CASCADE,
  PRIMARY KEY (subspecies_slug, language_slug)
);