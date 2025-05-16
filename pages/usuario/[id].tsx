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
            <h1>Informações do Usuário</h1>
            <Link href='/'>Página Inicial</Link>
            <p><strong>ID:</strong> {users.id}</p>
            <p><strong>Nome:</strong> {users.name}</p>
            <p><strong>Email:</strong> {users.email}</p>
        </div>
    );
}

export default Veiculo;
