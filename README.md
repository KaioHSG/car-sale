# Car Sale

*Um projeto de um marketplace veicular.*

## Principais tecnologias

[![Node.js](https://img.shields.io/badge/nodejs-green)](https://nodejs.org)
[![npm](https://img.shields.io/badge/npm-red)](https://www.npmjs.com)
[![React](https://img.shields.io/badge/react-blue)](https://react.dev)
[![Next.js](https://img.shields.io/badge/nextjs-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/typescript-navy)](https://www.typescriptlang.org)
[![Postman](https://img.shields.io/badge/postman-orange)](https://www.postman.com)
[![PostgreSQL](https://img.shields.io/badge/postgresql-blue)](https://www.postgresql.org)
[![Git](https://img.shields.io/badge/git-orange)](https://git-scm.com)

## Todas tecnologias

* [Node.js](https://nodejs.org): Ambiente para execução de JavaScript e pacotes.

* [npm](https://www.npmjs.com): Gestor de pacotes do Node.js com os pacotes abaixo.
    * [bcryptjs](https://www.npmjs.com/package/bcryptjs): Biblioteca para hashing de senhas de forma segura.
    * [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Biblioteca para criação e verificação de tokens JWT.
    * [next](https://www.npmjs.com/package/next): Framework para React com renderização do lado do servidor e geração de sites estáticos.
    * [pg](https://www.npmjs.com/package/pg): Cliente PostgreSQL para Node.js.
    * [react](https://www.npmjs.com/package/react): Biblioteca JavaScript para criação de interfaces de usuário.
    * [react-dom](https://www.npmjs.com/package/react-dom): Biblioteca para renderizar elementos React no DOM.
    * [typescript](https://www.npmjs.com/package/typescript): Superset do JavaScript que adiciona tipagem estática.

* [Netlify](https://www.netlify.com): Plataforma de hospedagem e automação de deploy com suporte a React e Next.js.

* [Supabase](https://supabase.com): Plataforma de banco de dados que utiliza PostgreSQL.

* [Postman](https://www.postman.com): Plataforma de colaboração para desenvolvimento de APIs.

* [Imgur](https://imgur.com): Plataforma para hospedagem de imagens.

## Como rodar localmente

1. Instale o [Node.js](https://nodejs.org/pt/download), [PostgreSQL](https://www.postgresql.org/download) e [Git](https://git-scm.com/downloads).

2. Clone o repositório.

``` shell
git clone https://github.com/KaioHSG/car-sale
cd car-sale
```

3. Instale as dependências.

``` shell
npm install
```

4. Crie o banco de dados.

``` shell
psql -U postgres
CREATE DATABASE car_sale;
```

5. Configure as variáveis de ambiente.

``` dotenv
PG_DATABASE=car_sale
PG_HOST=localhost
PG_PASSWORD=sua_senha
PG_PORT=5432
PG_USER=postgres
```

6. Execute o projeto.

``` shell
npm run dev
```

7. Acesse em seu navegador [`http://localhost:3000`](http://localhost:3000 ).