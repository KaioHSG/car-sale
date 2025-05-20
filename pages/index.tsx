import Link from 'next/link';
import Head from 'next/head';

function Inicio() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>HSG Veicle Sales - Venda de Carros</title>
            </Head>
            <h1>HSG Veicle Sales</h1>
            <ul>
                <li><Link href="/perfil">Meu perfil</Link></li>
                <li><Link href="/usuarios">Lista de usuários</Link></li>
                <li><Link href="/veiculos">Lista de veículos</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
        </div>
    )
}

export default Inicio
