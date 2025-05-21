import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <div>
        <Head>
          <title>Não Encontrada | HSG Vehicle Sales</title>
        </Head>
        <h1>HSG Vehicle Sales</h1>
        <ul>
          <li><Link href='/'>Página Inicial</Link></li>
          <li><Link href="/perfil">Meu perfil</Link></li>
          <li><Link href="/usuarios">Lista de usuários</Link></li>
          <li><Link href="/veiculos">Lista de veículos</Link></li>
          <li><Link href="/sobre">Sobre</Link></li>
        </ul>
        <h2>Página não encontrada</h2>
        <p>A página que você procurou não existe.</p>
    </div>
  );
}