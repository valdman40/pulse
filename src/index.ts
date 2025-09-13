import Fastify from 'fastify';
import { config } from './config';
import { pingDb } from './db';
import { pingMq } from "./mq";

const app = Fastify({ logger: true });

app.get('/health', async () => ({ ok: true }));

app.get('/db/ping', async () => {
  const ok = await pingDb();
  return { db: ok ? 'up' : 'down' };
});

app.get('/mq/ping', async () => {
  const ok = await pingMq();
  return { mq: ok ? 'up' : 'down' };
});

app.listen({ port: config.port, host: '0.0.0.0' })
  .then(addr => app.log.info(`listening on ${addr}`))
  .catch(err => { app.log.error(err); process.exit(1); });
