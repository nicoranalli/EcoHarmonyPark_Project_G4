import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/models';
import { users } from '../data/users';

import dotenv from 'dotenv';
dotenv.config()


declare global {
    namespace Express {
        interface Request {
            user?: Omit<User, 'password'>;  // Ajusta el tipo según lo que decodifiques
        }
    }
}


export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
             res.status(401).json({ error: 'No token provided' });
             return
        }

        const [, token] = authHeader.split(' ')

   
        if (!token) {
             res.status(401).json({ error: 'No token provided' });
             return
        }

        const secret_code ='secreto123'


        try {
            const decoded = jwt.verify(token.trim(), secret_code)
            console.log('Decoded token:', decoded); // Para depuración
            if (typeof decoded === 'object' && decoded.id) {
                const { id, name, email } = users.find(user => user.id === decoded.id) || {}
                req.user = { id, name, email } // Aquí puedes asignar el usuario decodificado a la solicitud

                console.log('Usuario decodificado:', req.user); // Para depuración

            } else {
                 res.status(401).json({ error: "Token inválido o expirado" });
                 return

            }

            next()



        } catch (error) {
             res.status(401).json({ error: 'Token no válido' })
             return
            
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        return
    }
}