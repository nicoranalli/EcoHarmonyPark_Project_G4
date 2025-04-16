import {Router} from 'express';
import { authenticate } from '../middleware/authenticate';
import { createTicket } from '../controllers/ticketsController';

const router = Router();



router.post('/tickets', authenticate, createTicket);

export default router;