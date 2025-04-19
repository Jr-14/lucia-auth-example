import 'dotenv/config';
import Fastify from 'fastify';
import { getResult } from './db';

export async function build() {
  const fastify = Fastify({
    logger: {
      level: 'info',
      transport: {
	target: 'pino-pretty'
      }
    }
  });

  fastify.get('/health', async (request, reply) => {
    console.log('getting health');
    try {
      await getResult();
      reply.status(200);
    } catch(error) {
      console.log('Error connecting to db', { error });
      reply.status(400);
    }
  });

  return fastify;
}
