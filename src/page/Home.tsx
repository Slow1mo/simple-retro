import React, { useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../App";
import { actions, ReducerState } from "../mainReducer";
import { TextInput } from "../component/TextInput";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid"
import { fireb } from "../fire";

interface Props {
  reducer: ReducerState;
  setUser: typeof actions.setUser;
}

const Home = (props: Props) => {
  const history = useHistory()
  const [board, setBoard] = useState("")
  const updateBoard = (value: string) => {
    setBoard(value);
  };
  const createBoard = () => {
    const boardId: string = uuid()
    console.log('created board', boardId)
    history.push(`board/${boardId}`)
    fireb.database().ref(`board`).push(boardId)
  }
  
  const updateUser = (value: string) => {
    props.setUser(value);
  };
  
  return (
    <div>
      <TextInput
        id="nameInput"
        label="Name"
        defaultValue={props.reducer.user}
        onChange={updateUser}
      />
      <TextInput
        id="boardInput"
        label="Board"
        onChange={updateBoard}
      />
      <button onClick={createBoard} style={{padding: "10px", margin: "10px 10px 10px 0"}}>create</button>

      test {props.reducer.user}
    </div>
  );
};

const mapState = (state: RootState) => ({
  reducer: state.mainReducer
});

const mapDispatch = {
  setUser: actions.setUser
};

export default connect(mapState, mapDispatch)(Home);
