import Link from 'next/link';
import Head from 'next/head';

function Registrar() {
    return (
        <div>
            <Head>
                <title>Entrar | Kaio HSG - Venda de Carros</title>
            </Head>
            <h1>Entrar</h1>
            <Link href='/'>Página Inicial</Link>
            <div>
                <div>
                    <input type="text" placeholder="Nome" />
                </div>
                <div>
                    <input type="email" placeholder="Email" />
                </div>
                <div>
                    <input type="password" placeholder="Senha" />
                </div>
                <div>
                    <button type="submit">Registar</button>
                </div>
                <div>
                    <Link href='/entrar'>Entrar</Link>
                </div>
            </div>
        </div>
    );
}

export default Registrar;
