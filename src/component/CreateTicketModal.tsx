import React from "react";
import { useState } from "react";
import { fireb } from "../fire";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

interface Props {
  isOpen: boolean;
  close: () => void;
}
export interface ITicket {
  boardId: string;
  id: string;
  text: string;
  votes: number;
}
export const CreateTicketModal = ({ isOpen, close }: Props) => {
  const { boardId } = useParams();
  const [text, setText] = useState("");

  if (!boardId) return <div />;

  const handleTextChange = (evt: any) => {
    setText(evt.target.value);
  };

  const handleSave = () => {
    const ticket: ITicket = {
      boardId,
      id: uuid(),
      text,
      votes: 0,
    };
    fireb.database().ref(`ticket`).push(ticket);
    close();
  };

  if (!isOpen) return <div />;
  return (
    <div style={{ backgroundColor: "#EEEEEE" }}>
      <textarea name="content" id="new-ticket-content" />
      <div onClick={close}>Cancel</div>
      <div onClick={handleSave}>Create</div>
    </div>
  );
};
