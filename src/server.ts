import { build } from './app';

const startServer = async () => {
  const server = await build();

  server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });
};

startServer();
