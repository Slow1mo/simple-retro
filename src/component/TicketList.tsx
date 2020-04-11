import React from 'react';
import { Ticket } from "./Ticket"
import { ITicket } from './CreateTicketModal';

interface Props {
  tickets: ITicket[]
}

export const TicketList = (props: Props) => {

  return (
    <div>
      {props.tickets.map((ticket: ITicket) => {
        return <Ticket defaultText={ticket.text} />
      })}
    </div>
  );
}