import React, { createContext, useContext, useState } from 'react';

export interface Ticket {
  age: string;
  type: 'Regular' | 'VIP';
  esJubilado: boolean;
  amount: number;
}

export interface TicketContextType {
  tickets: Ticket[];
  date: Date;
  total: number;
  setTickets: (tickets: Ticket[]) => void;
  setDate: (date: Date) => void;
  setTotal: (total: number) => void;
  reset: () => void;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

export const TicketProvider = ({ children }: { children: React.ReactNode }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [date, setDate] = useState<Date>(new Date());

  const [total, setTotal] = useState<number>(0);

  const reset = () => {
    setTickets([]);
    setDate(new Date());
    setTotal(0);
  };

  return (
    <TicketContext.Provider value={{ tickets, setTickets, date, setDate, total, setTotal, reset }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicket = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTicket debe usarse dentro de un TicketProvider');
  }
  return context;
};
