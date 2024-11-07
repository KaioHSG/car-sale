import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Entrar() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/perfil'); // Redireciona para perfil se já estiver logado
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('token', data.token);
            router.push('/perfil'); // Redireciona para perfil após login
        } else {
            console.error(data.message);
        }
    };

    return (
        <div>
            <Head>
                <title>Entrar | Kaio HSG - Venda de Carros</title>
            </Head>
            <h1>Entrar</h1><br />
            <Link href='/'>Página Inicial</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder="Senha" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <button type="submit">Entrar</button>
                </div>
                <p><a href="#">Esqueci minha senha</a></p>
                <p><Link href='/registrar'>Registrar</Link></p>
            </form>
        </div>
    );
}

export default Entrar;
