import { users } from '../data/users';
import { Ticket, Tickets, User} from '../models/models';
import { tickets } from '../data/tickets';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import QRCode from 'qrcode';
import nodemailer from 'nodemailer';

const BACK_URL = 'http://192.168.0.237:4000/' 
const ticketsList = tickets;

export const createTicket = async (req: Request, res: Response) => {
  const { tickets: incomingTickets, date, total, method } = req.body;
  const userId = req.user.id;
  const mail = req.user.email;

  console.log('User ID:', userId);
  if (!incomingTickets || !Array.isArray(incomingTickets)) {
     res.status(400).json({ error: 'Tickets inválidos.' });
     return
  }

  try {
    const generatedTickets: Ticket[] = incomingTickets.map((ticket) => ({
      ...ticket,
      id: uuidv4().slice(0, 8), // Genera un ID único para cada ticket
      date,
      used: false,
    }));

    const operationId = uuidv4().slice(0, 8)
    const qrData = `${BACK_URL}tickets/verify-ticket/${operationId}`;
    const qrCode = await QRCode.toDataURL(qrData);

    const user = users.find((u) => u.id === userId);

    const newOperation: Tickets = {
      idOperation: operationId,
      tickets: generatedTickets,
      total,
      userId,
      date: new Date(date),
      qrCode,
      paymentMethod: method,
      usedOperation: false,
    };

    ticketsList.push(newOperation);

    if (!user) {
       res.status(404).json({ error: 'Usuario no encontrado' });
       return
    }



    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nicoranalli9@gmail.com',
        pass: 'flcw gbka qpqa vmbq',
      },
    });

    var htmlPreview = ''
    console.log(method)
    if (method === 'cash'){
       htmlPreview = `
        <h3>¡Gracias por tu reserva!, ${user.name}!</h3>
        <p>Has reservado ${generatedTickets.length} entradas para el día <strong>${new Date(date).toLocaleDateString()}</strong>.</p>
        <p>Deberas asistir a boletería el dia elegido, y retirar tus entradas pagando en efectivo</p>
        <p><strong>El total a pagar es: $${total}</strong></p>
        <p>TE ESPERAMOS!!</p>
        <p>El siguiente código QR te habilita a ingresar al parque el día elegiod</p>
       <img src="cid:qrimage" />
       <p> Código de operación: ${operationId}</p>
      `

    }else {
     htmlPreview =  `
        <h3>¡Gracias por tu compra, ${user.name}!</h3>
        <p>Has comprado ${generatedTickets.length} entradas para el día <strong>${new Date(date).toLocaleDateString()}</strong>.</p>
        <p>El siguiente código QR te habilita a ingresar al parque el día elegido</p>
       <img src="cid:qrimage" />
       <p> Código de operación: ${operationId}</p>
      `

    }

    await transporter.sendMail({
      from: '"EcoHarmony Park" <noreply@parque.com>',
      to: 'nicoranalli9@gmail.com',
      subject: 'Compra/Reserva de entradas confirmada',
      html: htmlPreview,
      attachments: [
        {
          filename: 'qr.png',
          content: qrCode.split("base64,")[1],
          encoding: 'base64',
          cid: 'qrimage', // ID usado en el src="cid:qrimage"
        },
      ],
    });

     res.status(201).json({
      message: 'Compra realizada con éxito',
      tickets: generatedTickets,
      qrCode,
    });
    return
  } catch (error) {
    console.error(error);
     res.status(500).json();
     return
  }
};


export const verifyTicket = async (req: Request, res: Response) => {

  console.log('Verifying ticket...');
  const ticketId = req.params.id;

  let foundTicket: Tickets | undefined;

    const operationId = ticketsList.find((t) => t.idOperation.toString() === ticketId);

    if (operationId) {
      foundTicket = operationId;
    }
  

  if (!foundTicket) {
     res.status(404).json({ valid: false, message: 'Ticket no encontrado' });
     return
  }

  if (foundTicket.usedOperation) {
     res.status(400).json({ valid: false, message: 'El ticket ya fue usado' });
     return
  }

  // Podés validar la fecha también si querés

  
   res.status(200).json({
    valid: true,
    message: 'Ticket válido y marcado como usado',
    ticket: foundTicket,
  });
  return
};

export const getTickets = async (req: Request, res: Response) => {

  const userId = req.user.id;
  const userTickets = ticketsList.filter((ticket) => ticket.userId === userId);

  if (!userTickets) {
     res.status(404).json({ error: 'No se encontraron tickets para este usuario' });
     return
  }


   res.status(200).json({ tickets: userTickets });
   return
}

export const getTicketById = async (req: Request, res: Response) => {
  const ticketId = req.params.id;
  const ticket = ticketsList.find((ticket) => ticket.idOperation === ticketId);

  if (!ticket) {
     res.status(404).json({ error: 'Ticket no encontrado' });
     return
  }

   res.status(200).json({ ticket });
   return
}