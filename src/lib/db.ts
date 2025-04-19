import { drizzle } from 'drizzle-orm/node-postgres';
import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import type { InferSelectModel, InferInsertModel } from 'drizzle-orm'

import { getEnvironmentVariables } from '../env';

const { dbHost, dbName, dbUser, dbPassword } = getEnvironmentVariables();

export const db = drizzle({ 
  connection: { 
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
    port: 5432
  }
});

export const getResult = async () => {
  return await db.execute('select 1');
}

export const userTable = pgTable("app_user", {
	id: serial("id")
    .primaryKey(),
  username: text("username")
    .notNull()
    .unique()
});

export const sessionTable = pgTable("user_session", {
	id: text("id").primaryKey(),
	userId: integer("user_id")
		.notNull()
		.references(() => userTable.id),
	expiresAt: timestamp("expires_at", {
		withTimezone: true,
		mode: "date"
	}).notNull()
});

export type User = InferSelectModel<typeof userTable>;
export type Session = InferSelectModel<typeof sessionTable>;

