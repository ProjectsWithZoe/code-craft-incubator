import { Client } from 'pg';

export default async function handler(req, res) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect(); // 🔌 Open connection

    const result = await client.query('SELECT NOW()'); // 🧠 Query Neon
    await client.end(); // 🔒 Close connection

    res.status(200).json(result.rows[0]); // ✅ Send result
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database query failed' });
  }
}
