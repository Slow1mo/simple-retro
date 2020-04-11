import React, { useState } from "react";
import { CreateTicketModal } from "../component/CreateTicketModal"

export const Board = () => {
  const [isCreatingTicket, setIsCreatingTicket] = useState(false)
  const handleIsCreatingTicket = () => {
    setIsCreatingTicket(true)
  }
  

  return (
    <>
      <button onClick={handleIsCreatingTicket} style={{padding: "10px", margin: "10px 10px 10px 0"}}>create Ticket</button>
      <CreateTicketModal isOpen={isCreatingTicket} close={() => setIsCreatingTicket(false)} />
    </>
  );
};

