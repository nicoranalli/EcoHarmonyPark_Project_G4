export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    }

export interface Ticket {
    id: string;
    type: string;
    edad: number;
    esJubilado: boolean;
    amount: number;
    }

    
export interface Tickets {
    idOperation: string;
    tickets: Ticket[];
    total: number;
    date: Date;
    userId: number;
    qrCode?: string;
    paymentMethod: string;
    usedOperation: boolean;    
}


