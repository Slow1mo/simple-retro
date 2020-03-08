import React, { useReducer, useState, useEffect, useContext } from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  withStyles
} from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { MainContext } from "../App";
import { SET_USER } from "../reducer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    }
  })
);

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

export const User = () => {
  const { state, dispatcher } = useContext(MainContext);
  console.log(state, dispatcher)
  const classes = useStyles();

  const saveUser = (evt: any) => {
    const user = evt.target.value;
    dispatch({ type: SET_USER, user });
  };

  return (
    <div>
      <ValidationTextField
        className={classes.margin}
        label="CSS validation style"
        required
        onChange={saveUser}
        variant="outlined"
        placeholder="Batman"
        id="validation-outlined-input"
      />
    </div>
  );
};
