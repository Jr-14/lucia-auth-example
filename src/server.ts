import 'dotenv/config';
import Fastify from 'fastify';
import { getResult } from './db';

const fastify = Fastify();

export async function startServer() {
  // fastify.register(apiRoutes, { prefix: '/api' });

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

  fastify.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });
}

startServer();
