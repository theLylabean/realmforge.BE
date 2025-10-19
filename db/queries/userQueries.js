// const encoded = "aHR0cHM6Ly90bnM0bHBnbXppaXlwbnh4emVsNXNzNW55dTBuZnRvbC5sYW1iZGEtdXJsLnVzLWVhc3QtMS5vbi5hd3MvcmFtcC1jaGFsbGVuZ2UtaW5zdHJ1Y3Rpb25zLw==";
// const decoded = Buffer.from(encoded, 'base64').toString('utf8');
// console.log(decoded);

import db from '../client.js';

// CREATE new user
export async function createUsers (first_name, last_name, email, username, password) {
    try {
        const result = await db.query(
            `INSERT INTO users (first_name, last_name, email, username, password)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;`,
        [first_name, last_name, email, username, password]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error creating user. Try again.', error);
        throw error;
    }
}

// CHECK new users have a unique username
export async function newUsernameCheck (username) {
    try {
        const result = await db.query(
            `SELECT * FROM users WHERE username = $1`,
            [username]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error. Username already exists or is invalid. Please try again.', error.message);
        throw error;
    }
}

// CHECK new users have a unique email
export async function newEmailCheck (email) {
    try {
        const result = await db.query(
            `SELECT * FROM users where email = $1`,
            [email]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error. Email already exists or is invalid. Please try again.', error.message);
        throw error;
    }
}

// LOGIN user
export async function getLogin (username) {
    try {
        const result = await db.query(
            `SELECT * FROM users WHERE username = $1`,
            [username]
        );
        return result;
    } catch (error) {
        console.error('Error logging in. Username incorrect. Please try again.', error.message);
        throw error;
    }
}

// GET user by ID
export async function getUserById (id) {
    try {
        const result = await db.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        )
    } catch (error) {
        
    }
}