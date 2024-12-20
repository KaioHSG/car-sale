import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Registrar() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            router.push('/perfil'); // Redireciona para perfil se já estiver logado
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage(''); // Limpa mensagens de erro

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password }),
        });

        setLoading(false);

        const data = await res.json();
        if (res.ok) {
            router.push('/entrar');
        } else {
            // Mostra mensagem de erro
            setErrorMessage(data.message || 'Erro desconhecido');
        }
    };

    return (
        <div>
            <Head>
                <title>Registrar | Kaio HSG - Venda de Carros</title>
            </Head>
            <h1>Registrar</h1>
            <Link href='/'>Página Inicial</Link>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Nome" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <input 
                        type="email" 
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
                    <button type="submit" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrar'}
                    </button>
                </div>
                {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                <div>
                    <Link href='/entrar'>Entrar</Link>
                </div>
            </form>
        </div>
    );
}

export default Registrar;
