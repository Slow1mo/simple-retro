import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { fireb } from "../fire";
import { useParams } from 'react-router-dom';
import { v4 as uuid } from "uuid"

interface Props {
  isOpen: boolean
  close: () => void
}
export interface ITicket {
  boardId: string
  id: string
  text: string
  votes: number
}
export const CreateTicketModal = ({isOpen, close}: Props) => {
  const { boardId } = useParams()
  const [text, setText] = useState("")

  if (!boardId) return <div />

  const handleTextChange = (evt: any) => {
    setText(evt.target.value)
  }
  
  const handleSave = () => {
    const ticket: ITicket = {
      boardId,
      id: uuid(),
      text,
      votes: 0,
    }
    fireb.database().ref(`ticket`).push(ticket)
    close()
  }

  return (
    <Dialog open={isOpen} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <TextField
          id="textarea-field"
          label="Multiline"
          multiline
          variant="outlined"
          autoFocus
          fullWidth
          onChange={handleTextChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSave} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}