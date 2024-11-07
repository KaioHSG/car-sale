import type { NextApiRequest, NextApiResponse } from 'next';
import db from './db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { password } = req.body;
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Não autorizado' });
        }

        try {
            const decoded: any = jwt.verify(token, 'sua_chave_secreta');
            const userId = decoded.id;

            // Busca o usuário no banco de dados
            const userResult = await db.query('SELECT * FROM users WHERE id = $1', [userId]);
            const user = userResult.rows[0];

            if (!user) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            // Verifica se a senha fornecida corresponde à senha armazenada
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Senha incorreta' });
            }

            // Exclui o usuário
            await db.query('DELETE FROM users WHERE id = $1', [userId]);

            res.status(200).json({ message: 'Conta excluída com sucesso' });
        } catch (error) {
            console.error('Erro ao excluir conta:', error);
            res.status(500).json({ message: 'Erro ao excluir conta' });
        }
    } else {
        res.setHeader('Allow', ['DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
