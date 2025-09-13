import { Pool } from 'pg';
import { config } from './config.js';

export const pool = new Pool({ connectionString: config.dbUrl });

export async function pingDb() {
  const res = await pool.query('select 1 as ok');
  return res.rows[0].ok === 1;
}
