CREATE TABLE subrace_language_options (
  id SERIAL PRIMARY KEY,
  subrace_slug TEXT REFERENCES subraces(slug) ON DELETE CASCADE ON UPDATE CASCADE,
  choose INTEGER NOT NULL DEFAULT 1,
  note TEXT
);

CREATE TABLE subrace_language_option_items (
  option_id INTEGER REFERENCES subrace_language_options(id) ON DELETE CASCADE,
  language_slug TEXT REFERENCES languages(slug) ON DELETE CASCADE,
  PRIMARY KEY (option_id, language_slug)
);
