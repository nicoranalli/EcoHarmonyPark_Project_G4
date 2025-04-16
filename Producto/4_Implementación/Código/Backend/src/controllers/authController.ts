import { Request, Response } from 'express';
import {users} from '../data/users';
import jwt from 'jsonwebtoken';

export const login = (req: Request, res: Response) => {
 
        const { email, password } = req.body;
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            const token = jwt.sign({ id: user.id }, "secreto123", { expiresIn: '1h' });
            res.json({ token, user: { id: user.id,name:user.name, email: user.email } }); 
            return
        } else {
            res.status(401).json({ message: 'Email o contraseña incorrectos' });
            return
        }
     }