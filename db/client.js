import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pg;

const db = new Client(process.env.DATABASE_URL);
await db.connect();

export default db;