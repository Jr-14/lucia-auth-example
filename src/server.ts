import 'dotenv/config';
import Fastify from 'fastify';

const fastify = Fastify();

export async function startServer() {
  // fastify.register(apiRoutes, { prefix: '/api' });

  fastify.get('/health', async (request, reply) => {
    reply.status(200);
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
