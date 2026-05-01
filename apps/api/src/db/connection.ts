import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from './schema'

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL || 'mysql://dmit:dmit_dev_password@localhost:3306/dmit_saas',
})

export const db = drizzle(pool, { schema, mode: 'default' })
export type DbClient = typeof db
