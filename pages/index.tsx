import Link from 'next/link';
import Head from 'next/head';

function Inicio() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Kaio HSG - Venda de Carros</title>
            </Head>
            <h1>Página Inicial</h1>
            <ul>
                <li><Link href="/entrar">Entrar</Link></li>
                <li><Link href='/registrar'>Registrar</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/usuario">Lista de usuários</Link></li>
                <li><Link href="/veiculo">Lista de veículos</Link></li>
            </ul>
        </div>
    )
}

export default Inicio
