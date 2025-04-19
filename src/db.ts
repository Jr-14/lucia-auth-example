import { drizzle } from 'drizzle-orm/node-postgres';
import { getEnvironmentVariables } from './env';

const { dbHost, dbName, dbUser, dbPassword } = getEnvironmentVariables();

console.log('Env vars', {
  dbHost,
  dbName,
  dbUser,
  dbPassword
});

// const db = drizzle(dbHost);
const db = drizzle({ 
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
