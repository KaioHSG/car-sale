import Link from 'next/link';
import Head from 'next/head';

function Sobre() {
    return (
        <div>
            <Head>
                <title>Sobre | Kaio HSG - Venda de Carros</title>
            </Head>
            <h1>Car Sale</h1>
            <ul>
                <li><Link href='/'>Página Inicial</Link></li>
                <li><Link href="/perfil">Meu perfil</Link></li>
                <li><Link href="/usuario">Lista de usuários</Link></li>
                <li><Link href="/veiculo">Lista de veículos</Link></li>
            </ul>
            <h2>Sobre</h2>
            <p>Este é um pequeno projeto para criar um modelo de site de venda de veículos 100% gratuito, utilizando apenas ferramentas totalmente gratuitas.</p>
            <p>Saiba mais sobre o projeto em sua <a href="https://github.com/KaioHSG/car-sale" target='_blank'>página do GitGub</a>.</p>
        </div>
    )
}

export default Sobre