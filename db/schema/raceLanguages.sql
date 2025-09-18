CREATE TABLE race_languages (
  race_slug TEXT REFERENCES races(slug) ON DELETE CASCADE,
  language_slug TEXT REFERENCES languages(slug) ON DELETE CASCADE,
  PRIMARY KEY (race_slug, language_slug)
);