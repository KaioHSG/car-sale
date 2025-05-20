import type { NextApiRequest, NextApiResponse } from 'next';
import db from './db';
import bcrypt from 'bcryptjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, password } = req.body;

        // Hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Inserir usuário no banco de dados
        try {
            const result = await db.query(
                'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
                [name, email, hashedPassword]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ message: 'Erro ao registrar usuário', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
