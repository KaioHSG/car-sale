import { Client } from 'pg';

let sslConfig

if (process.env.PRODUCTION === 'true') {
    sslConfig = {
        rejectUnauthorized: false,
    }
}

const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: sslConfig,
});

client.connect();

export default client;
