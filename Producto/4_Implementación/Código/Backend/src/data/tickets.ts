import { Ticket, Tickets } from '../models/models';

export const tickets: Tickets[] = [
    {
        idOperation: '1',
        tickets: [
            {
                id: '1',
                type: 'Regular',
                edad: 25,
                esJubilado: false,
                amount: 100,
            },
            {
                id: '2',
                type: 'VIP',
                edad: 30,
                esJubilado: true,
                amount: 150,
            },
        ],
        total: 250,
        userId: 1,
        date: new Date('2023-10-01'),
        paymentMethod: 'Mercado Pago',
        usedOperation: true,
    }
];