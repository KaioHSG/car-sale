import { Client } from 'pg';

require('dotenv').config()

const client = new Client({
    user: process.env.PG_USER, // seu usuário do PostgreSQL
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,   // nome do banco de dados que você criou
    password: process.env.PG_PASSWORD, // sua senha do PostgreSQL
    port: process.env.PG_PORT,
    ssl: {
      rejectUnauthorized: false, // Aceita qualquer certificado SSL
    }
});

client.connect();

export default client;
