import {Router} from 'express';
import { authenticate } from '../middleware/authenticate';
import {  createPreference } from '../controllers/paymentController';

const router = Router();

router.post('/create-order', authenticate, createPreference);


export default router;