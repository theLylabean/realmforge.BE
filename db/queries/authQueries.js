import db from '../client.js';

// LOGIN user
export async function getLogin (username) {
    try {
        const result = await db.query(
            `SELECT * FROM users WHERE username = $1`,
            [username]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error logging in. Username incorrect. Please try again.', error.message);
        throw error;
    }
}