import { users } from '../data/users';
import { User, Ticket } from '../models/models';
import { Request, Response } from 'express';

// Simulación de parque abierto (ej: lunes a sábado)
const diasAbiertos = [1, 2, 3, 4, 5, 6];

export const createTicket = (req: Request, res: Response) => {
    const { visitDate, numberOfTickets, passType, paymentMethod, visitorAges } =
        req.body;

    const userId = req.user.id;

    if (!paymentMethod){
        res
        .status(400)
        .json({ error: "Debes seleccionar una forma de pago" });
        return
    }

    if (numberOfTickets > 10){
        res
            .status(400)
            .json({ error: "No puedes comprar más de 10 entradas" });
        return
    }

    const fecha = new Date(visitDate);
    const hoy = new Date();
    if (fecha.getTime() < hoy.setHours(0, 0, 0, 0)) {
         res.status(400).json({ error: "La fecha debe ser hoy o futura" });
         return
    }

    if (!diasAbiertos.includes(fecha.getDay())) {
         res.status(400).json({ error: "El parque está cerrado ese día" });
         return
    }


    /*
    try {
     
      const user = users.find((user) => user.id === userId);
  
      if (paymentMethod === "TARJETA") {
        // Simular redirección a MercadoPago
        return res.status(200).json({
          message: "Redirigiendo a MercadoPago...",
          redirect: "https://www.mercadopago.com.ar",
        },
        });
      }
  */

    /* ENVIAMOS EL MAIL CON NODEMAILER
    // Enviar correo de confirmación
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: '"Parque Aventura" <noreply@parque.com>',
      to: user.email,
      subject: "Compra de entradas confirmada",
      text: `Has comprado ${numberOfTickets} entradas para el día ${visitDate}. ¡Gracias por tu compra!`,
    });

    ticket.emailSent = true;
    await ticket.save();

    res.status(201).json({
      message: `Compra exitosa: ${numberOfTickets} entradas para ${visitDate}`,
      ticket,
    });

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor" });
    
  }
    */
}