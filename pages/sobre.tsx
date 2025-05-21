import Link from 'next/link';
import Head from 'next/head';

function Sobre() {
    return (
        <div>
            <Head>
                <title>Sobre | HSG Vehicle Sales</title>
            </Head>
            <h1>HSG Vehicle Sales</h1>
            <ul>
                <li><Link href='/'>Página Inicial</Link></li>
                <li><Link href="/perfil">Meu perfil</Link></li>
                <li><Link href="/usuarios">Lista de usuários</Link></li>
                <li><Link href="/veiculos">Lista de veículos</Link></li>
            </ul>
            <h2>Sobre</h2>
            <p>Este é um pequeno projeto para criar um modelo de site de venda de veículos 100% gratuito, utilizando apenas ferramentas totalmente gratuitas.</p>
            <p>Saiba mais sobre o projeto em sua <a href="https://github.com/KaioHSG/car-sale" target='_blank'>página do GitHub</a>.</p>
            <p>Saiba sobre os termos do site em sua <Link href='/termos'>página de termos</Link>.</p>
        </div>
    )
}

export default Sobre