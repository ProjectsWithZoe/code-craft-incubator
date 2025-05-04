import { neon } from '@neondatabase/serverless';

// Create a single connection pool
const sql = neon(process.env.DATABASE_URL);

export { sql }; 