import type { NextApiRequest, NextApiResponse } from 'next';
import db from './db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
            const user = result.rows[0];

            if (user && (await bcrypt.compare(password, user.password))) {
                // Gerar um token JWT incluindo o nome e o id
                const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, 'sua_chave_secreta', { expiresIn: '1h' });
                return res.status(200).json({ token });
            } else {
                return res.status(401).json({ message: 'Email ou senha incorretos' });
            }
        } catch (error) {
            return res.status(500).json({ message: 'Erro ao fazer login', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
