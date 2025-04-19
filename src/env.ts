import { z } from 'zod';

const environmentVariableSchema = z.object({
  dbHost: z.string().min(1),
  dbName: z.string().min(1),
  dbUser: z.string().min(1),
  dbPassword: z.string().min(1)
});

export type EnvironmentVariables = z.infer<typeof environmentVariableSchema>;

export const getEnvironmentVariables = (): EnvironmentVariables => {
  return environmentVariableSchema.parse({
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD
  });
}
