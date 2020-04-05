import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card as MdCard,
  CardActions,
  CardContent,
  IconButton,
  Typography,
  Divider,
  TextField,
} from '@material-ui/core';
import { EditSharp as EditSharpIcon, SaveSharp } from '@material-ui/icons';

export function Card() {
  const classes = useStyles();
  const [text, setText] = useState("naanananannanananan watman!")
  const [isEditing, setIsEditing] = useState(false)
  const toggleIsEditing = () => setIsEditing(!isEditing)

  if (isEditing) {
    return (
      <MdCard className={classes.root}>
        <CardContent className={classes.content}>
          <TextField
            id="textarea-field"
            label="Multiline"
            multiline
            defaultValue={text}
            variant="outlined"
            autoFocus
            fullWidth
            onBlur={evt => setText(evt.target.value)}
          />
        </CardContent>
        <Divider />
        <CardActions className={classes.actions}>
          <IconButton size="small" onClick={toggleIsEditing}>
            <SaveSharp aria-label="Save" />
          </IconButton>
        </CardActions>
      </MdCard>
    )
  }  
  return (
    <MdCard className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="body1">
          {text}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <IconButton size="small" onClick={toggleIsEditing}>
          <EditSharpIcon aria-label="Edit" />
        </IconButton>
      </CardActions>
    </MdCard>
  )
}


const useStyles = makeStyles({
  root: {
    width: 280,
    height: 300,
    display: "flex",
    flexDirection: "column",
    background: "lightGreen",
    position: "relative",
  },
  chevron: {
    position: "absolute",
    bottom: "44px",
    right: "50%",
  },
  content: {
    flex: 1,
    overflowY: "auto",
    marginBottom: "15px",
    wordBreak: "break-all",
  },
  actions: {
    alignSelf: "flex-end",
    marginRight: "8px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});