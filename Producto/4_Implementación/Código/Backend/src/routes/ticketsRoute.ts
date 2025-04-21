import {Router} from 'express';
import { authenticate } from '../middleware/authenticate';
import { createTicket, verifyTicket , getTickets} from '../controllers/ticketsController';

const router = Router();



router.post('/', authenticate, createTicket);
router.get('/', authenticate, getTickets)
router.get('/verify-ticket/:id', verifyTicket); // Cambia a PUT para actualizar el ticket


export default router;