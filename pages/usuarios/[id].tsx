import db from '../api/db';
import Link from 'next/link';
import Head from 'next/head';

export async function getStaticPaths() {

    const result = await db.query('SELECT id FROM users');

    const paths = result.rows.map((users) => ({
        params: { id: users.id.toString() },
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { id } = context.params;

    const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);

    return {
        props: {
            users: result.rows[0], // Passa os dados do veículo como props
        },
    };
}

function Veiculo({ users }) {
    return (
        <div>
            <Head>
                <title>{`Usuário - ${users.id} | HSG Vehicle Sales`}</title>
            </Head>
            <h1>HSG Vehicle Sales</h1>
            <ul>
                <li><Link href='/'>Página Inicial</Link></li>
                <li><Link href="/perfil">Meu perfil</Link></li>
                <li><Link href="/usuarios">Lista de usuários</Link></li>
                <li><Link href="/veiculos">Lista de veículos</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
            <h2>Informações do Usuário</h2>
            <p><strong>ID:</strong> {users.id}</p>
            <p><strong>Nome:</strong> {users.name}</p>
            <p><strong>E-mail:</strong> {users.email}</p>
        </div>
    );
}

export default Veiculo;
