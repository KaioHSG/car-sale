import Link from 'next/link';
import Head from 'next/head';

export default function NotFound() {
  return (
    <div>
        <Head>
            <title>Não Encontrada | HSG Vehicle Sales</title>
        </Head>
        <h1>HSG Vehicle Sales</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você procurou não existe.</p>
        <ul>
            <li><Link href='/'>Página Inicial.</Link></li>
        </ul>
    </div>
  );
}