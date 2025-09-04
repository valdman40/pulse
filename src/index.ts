import Fastify from 'fastify';

const app = Fastify({ logger: true });

async function sanityCheck() {
    return { ok: true };
}

app.get('/health', sanityCheck);

app.listen({ port: 3001, host: '0.0.0.0' })
    .then(addr => console.log(`Server is listening at ${addr}`))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });