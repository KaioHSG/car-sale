import Link from 'next/link';
import Head from 'next/head';

function Sobre() {
    return (
        <div>
            <Head>
                <title>Sobre | Kaio HSG - Venda de Carros</title>
            </Head>
            <h1>Sobre</h1>
            <Link href='/'>Página Inicial</Link>
        </div>
    )
}

export default Sobre