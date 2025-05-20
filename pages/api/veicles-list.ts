import db from './db';  // Certifique-se de que o db está exportando sua conexão com o banco de dados corretamente.

async function lista(request, response) {
    try {
        // Consulta no banco para pegar os IDs
        const result = await db.query('SELECT id FROM veicles'); // Substitua "your_table_name" pelo nome correto da tabela.
        const ids = result.rows.map((row: { id: number }) => row.id); // Extrai apenas os IDs

        // Cabeçalho de cache
        response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

        // Resposta com os IDs
        response.json({
            veicles_ids: ids
        });
    } catch (error) {
        console.error('Erro ao buscar IDs:', error);
        response.status(500).json({ error: 'Erro interno do servidor' });
    }
}

export default lista;
