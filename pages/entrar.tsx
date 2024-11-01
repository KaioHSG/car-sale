import Link from 'next/link';
import Head from 'next/head';

function Entrar() {
    return (
        <div>
            <Head>
                <title>Entrar | Kaio HSG - Venda de Carros</title>
            </Head>
            <h1>Entrar</h1>
            <Link href='/'>Página Inicial</Link>
            <div>
                <div>
                    <input type="text" placeholder="Email" />
                </div>
                <div>
                    <input type="password" placeholder="Senha" />
                </div>
                <div>
                    <label>
                        <input type="checkbox" /> Lembrar
                    </label>
                </div>
                <div>
                    <button type="submit">Entrar</button>
                </div>
                <div>
                    <a href="#">Esqueci minha senha</a>
                </div>
                <div>
                    <Link href='/registrar'>Registrar</Link>
                </div>
            </div>
        </div>
    );
}

export default Entrar;
