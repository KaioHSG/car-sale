import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jsonwebtoken';
import Head from 'next/head';
import Link from 'next/link';

interface User {
    id: number;
    name: string;
    email: string;
}

function Perfil() {
    const [user, setUser] = useState<User | null>(null);
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/perfil/entrar'); // Redireciona se não estiver logado
            return;
        }

        const decoded: any = jwt.decode(token);
        if (decoded) {
            setUser({ id: decoded.id, name: decoded.name, email: decoded.email });
        }
    }, [router]);

    const handleDeleteAccount = async () => {
        if (!password) {
            setErrorMessage('Por favor, insira sua senha para confirmar a exclusão.');
            return;
        }

        setLoading(true);
        setErrorMessage('');
        setSuccessMessage('');

        const token = localStorage.getItem('token');

        const res = await fetch('/api/delete-account', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ password }),
        });

        const data = await res.json();
        setLoading(false);

        if (res.ok) {
            localStorage.removeItem('token'); // Remove o token ao excluir a conta
            setSuccessMessage('Conta excluída com sucesso.');
            setTimeout(() => {
                router.push('/perfil/entrar'); // Redireciona para a página de login após a exclusão
            }, 2000);
        } else {
            setErrorMessage(data.message || 'Erro ao excluir a conta.');
        }
    };

    if (!user) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <Head>
                <title>Perfil | HSG Veicle Sales</title>
            </Head>
            <h1>HSG Veicle Sales</h1>
            <ul>
                <li><Link href='/'>Página Inicial</Link></li>
                <li><Link href="/usuarios">Lista de usuários</Link></li>
                <li><Link href="/veiculos">Lista de veículos</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
            </ul>
            <h2>Perfil</h2>
            <div>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Nome:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <div>
                <button onClick={() => {
                    localStorage.removeItem('token'); // Limpa o token ao sair
                    router.push('/perfil/entrar'); // Redireciona para a página de login
                }}>Sair</button>
            </div>

            <h3>Excluir Conta</h3>
            {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
            <input 
                type="password" 
                placeholder="Insira sua senha para excluir a conta" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleDeleteAccount} disabled={loading}>
                {loading ? 'Excluindo...' : 'Excluir Conta'}
            </button>
        </div>
    );
}

export default Perfil;
