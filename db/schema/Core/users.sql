CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email CITEXT NOT NULL UNIQUE, -- case-insensitive email
    username CITEXT NOT NULL UNIQUE, -- case-insensitive username
    password_hash TEXT NOT NULL, -- store bcrypt or argon2 hash
    role TEXT DEFAULT 'user' CHECK (role IN ('user', 'admin')),
    is_active BOOLEAN DEFAULT TRUE, -- can deactivate instead of delete
    is_email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    last_login_at TIMESTAMPTZ NULL,
    deleted_at TIMESTAMPTZ DEFAULT NULL
);
