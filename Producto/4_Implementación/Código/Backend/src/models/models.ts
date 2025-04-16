export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    }

export interface Ticket {
    id: number;
    visitDate: Date;
    passType: 'VIP' | 'Regular';
    paymentMethod: 'Efectivo' | 'Tarjeta';
    edades: number[];
    emailEnviado: boolean;
    userId: number;
    }


