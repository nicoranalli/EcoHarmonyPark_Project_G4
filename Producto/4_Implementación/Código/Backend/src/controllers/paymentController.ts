// backend/src/controllers/payments.ts

import {  Preference } from 'mercadopago';
import { client, CreatePreferenceResponse } from '../config/mercadoPago.config';
import { Request, Response } from 'express';



export const createPreference = async (req: Request, res: Response) => {

try {

  const { amount } = req.body;

  const preference = new Preference(client);

  const response = await preference.create({
    body: {
      items: [
        {
          id: '222222',
          title: 'Entradas Eco-Harmony',
          unit_price: amount,
          quantity: 1,
        },
      ],
      payer: {
          email: "TESTUSER816367999"},
      payment_methods: {
        default_payment_method_id: "account_money" // Prioriza saldo
      },
      back_urls: {
  success: 'ecoharmony://success',
  failure: 'ecoharmony://failure'
      },
      auto_return: 'approved',
      }
    });
    
    console.log('Preference created successfully:', response);

    const responseData : CreatePreferenceResponse = {
      id: response.id,
      init_point: response.init_point,
      sandbox_init_point: response.sandbox_init_point,
    };


     res.status(200).json(responseData);
     
     return

  } catch (error) {
    console.error('Error creating preference:', error);
     res.status(500).json({ error: 'Failed to create payment preference' });
     return
  }



   /* try {
      const { amount, description } = req.body;
  
      const preference = await new Preference(client).create({
        body: {
          items: [
            {
                id: '1234',
                title: description,
                unit_price: amount,
                quantity: 1,
            },
          ],
          back_urls: {
            success: 'https://www.tusitio.com/success',
            failure: 'https://www.tusitio.com/failure',
            pending: 'https://www.tusitio.com/pending',
          },
          auto_return: 'approved',
        },
      });
  
       res.status(200).json({ id: preference.id });
       return
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'No se pudo crear la preferencia' });
      return
    }*/
  };