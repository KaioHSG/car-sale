import db from '../api/db';
import Link from 'next/link';

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
            <h1>Car Sale</h1>
            <ul>
                <li><Link href='/'>Página Inicial</Link></li>
                <li><Link href="/perfil">Meu perfil</Link></li>
                <li><Link href="/usuario">Lista de usuários</Link></li>
                <li><Link href="/veiculo">Lista de veículos</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
            <h2>Informações do Usuário</h2>
            <p><strong>ID:</strong> {users.id}</p>
            <p><strong>Nome:</strong> {users.name}</p>
            <p><strong>Email:</strong> {users.email}</p>
        </div>
    );
}

export default Veiculo;
