import { Client } from 'pg';

export default async function handler(req, res) {
    if (req.method !== "POST"){
        return res.status(405).json({error: 'Only POST allowed'})
    }

    const {uuid, date_accessed} = req.body;

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect(); // 🔌 Open connection

    const result = await client.query('INSERT INTO users (uuid, date_accessed) VALUES ($1,$2) RETURNING *',[uuid , date_accessed]); // insert into users table in neon
    await client.end(); // 🔒 Close connection

    res.status(200).json({message: "user and date added", user: result.rows[0]}); // ✅ Send result
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database query failed' });
  }
}
