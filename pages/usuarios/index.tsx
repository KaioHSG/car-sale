import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

interface Carro {
  id: number;
}

const ListaUsers: React.FC = () => {
  const [UsersIds, setUsersIds] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsersIds = async () => {
      setLoading(true);
      setError(null); // Resetando o erro
      try {
        // Usando fetch para fazer a requisição à API
        const response = await fetch('/api/users-list'); // Certifique-se que o endpoint está correto

        if (!response.ok) {
          // Se a resposta for um erro (status 4xx ou 5xx), lançamos um erro
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erro ao carregar os IDs dos veículos');
        }

        // Extrai os dados da resposta como JSON
        const data = await response.json();

        // Verifica se a chave `users_ids` está presente
        if (data.users_ids && Array.isArray(data.users_ids)) {
          setUsersIds(data.users_ids); // Atualiza os IDs
        } else {
          setError('Resposta inválida da API');
        }
      } catch (err) {
        // Caso haja erro na requisição
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchUsersIds();
  }, []);

  return (
    <div>
      <Head>
        <title>Usuários | HSG Veicle Sales</title>
      </Head>
      <h1>HSG Veicle Sales</h1>
      <ul>
        <li><Link href='/'>Página Inicial</Link></li>
        <li><Link href="/perfil">Meu perfil</Link></li>
        <li><Link href="/veiculos">Lista de veículos</Link></li>
        <li><Link href="/sobre">Sobre</Link></li>
      </ul>
      <h2>Lista de IDs de Usuários</h2>

      {loading && <p>Carregando...</p>}

      {error && <p>{error}</p>}

      {UsersIds.length > 0 ? (
        <ul>
          {UsersIds.map((id) => (
            <li key={id}>
                <Link href={`/usuarios/${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>Não há usuários registrados.</p>
      )}
    </div>
  );
};

export default ListaUsers;