import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute';
import paymenRoute from './routes/paymentRoute';
// Agrega al inicio de tu archivo
import morgan from 'morgan';
import ticketsRoute from './routes/ticketsRoute';
import { tickets } from './data/tickets';

// Configura el middleware

dotenv.config();
const app = express();
app.use(morgan('dev')); // Muestra logs de cada solicitud

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { console.log('Request received'); res.send('Hello World!'); });

app.use('/auth', authRoute);
// app.use(/entradas, entradasRoute);
app.use('/payment', paymenRoute);
app.use('/tickets', ticketsRoute);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});