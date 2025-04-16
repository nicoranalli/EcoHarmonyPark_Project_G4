import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute';
import paymenRoute from './routes/paymentRoute';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => { res.send('Hello from the server') })

app.use('/auth', authRoute);
// app.use(/entradas, entradasRoute);
app.use('/payment', paymenRoute);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});