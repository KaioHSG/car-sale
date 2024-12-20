// VeiclesList.tsx
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Carro {
  id: number;
}

const ListaVeicles: React.FC = () => {
  const [VeiclesIds, setVeiclesIds] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVeiclesIds = async () => {
      setLoading(true);
      setError(null); // Resetando o erro
      try {
        // Usando fetch para fazer a requisição à API
        const response = await fetch('/api/veicles-list'); // Certifique-se que o endpoint está correto

        if (!response.ok) {
          // Se a resposta for um erro (status 4xx ou 5xx), lançamos um erro
          const errorData = await response.json();
          throw new Error(errorData.error || 'Erro ao carregar os IDs dos veículos');
        }

        // Extrai os dados da resposta como JSON
        const data = await response.json();

        // Verifica se a chave `cars_ids` está presente
        if (data.cars_ids && Array.isArray(data.cars_ids)) {
          setVeiclesIds(data.cars_ids); // Atualiza os IDs
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

    fetchVeiclesIds();
  }, []);

  return (
    <div>
      <h1>Lista de IDs de Veículos</h1>

      {loading && <p>Carregando...</p>}

      {error && <p>{error}</p>}

      {VeiclesIds.length > 0 ? (
        <ul>
          {VeiclesIds.map((id) => (
            <li key={id}>
                <Link href={`/Veicles/${id}`}>{id}</Link>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>Não há Veicles registrados.</p>
      )}
    </div>
  );
};

export default ListaVeicles;