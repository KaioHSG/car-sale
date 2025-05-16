import db from '../api/db';
import Link from 'next/link';

export async function getStaticPaths() {

    const result = await db.query('SELECT id FROM veicles');

    const paths = result.rows.map((vehicle) => ({
        params: { id: vehicle.id.toString() },
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { id } = context.params;

    const result = await db.query('SELECT * FROM veicles WHERE id = $1', [id]);

    return {
        props: {
            vehicle: result.rows[0], // Passa os dados do veículo como props
        },
    };
}

function Veiculo({ vehicle }) {
    return (
        <div>
            <h1>Informações do Veículo</h1>
            <Link href='/'>Página Inicial</Link>
            <p><strong>ID:</strong> {vehicle.id}</p>
            <p><strong>Nome:</strong> {vehicle.name}</p>
            <p><strong>Preço:</strong> R$ {vehicle.price}</p>
            <p><strong>ID do dono:</strong> <Link href={`/usuario/${vehicle.owner_id}`}>{vehicle.owner_id}</Link></p>
        </div>
    );
}

export default Veiculo;
