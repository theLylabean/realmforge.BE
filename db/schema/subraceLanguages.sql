CREATE TABLE subrace_languages (
  subrace_slug  TEXT REFERENCES subraces(slug)  ON DELETE CASCADE ON UPDATE CASCADE,
  language_slug TEXT REFERENCES languages(slug) ON DELETE CASCADE,
  PRIMARY KEY (subrace_slug, language_slug)
);