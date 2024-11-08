import { Client } from 'pg';

const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: process.env.PRODUCTION === 'true' ? {
        rejectUnauthorized: false, // Aceita qualquer certificado SSL em produção
    } : false, // Não utiliza SSL em desenvolvimento
});

client.connect();

export default client;
