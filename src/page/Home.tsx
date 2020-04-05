import React, { useState } from "react";
import { connect } from "react-redux";
import { RootState } from "../App";
import { actions, ReducerState } from "../mainReducer";
import { TextInput } from "../component/TextInput";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { Card } from "../component/Card";

interface Props {
  reducer: ReducerState;
  setUser: typeof actions.setUser;
}

const Home = (props: Props) => {
  const history = useHistory();
  const [retroName, setRetroName] = useState("");
  const [retroPassword, setRetroPassword] = useState("");
  const [error, setError] = useState("");

  const updateUser = (evt: any) => {
    props.setUser(evt.target.value);
  };

  const routeCreateRetro = () => {
    console.log("retroName", retroName);
    if (retroName.length < 5) {
      setError("Retrospective name minimum length is 5 characters");
      return;
    }
    // Todo: Verify it's valid
    console.log('pass', retroPassword)
    history.push(`/retro/${retroName}`);
  };

  return (
    <div>
      <TextInput
        id="nameInput"
        label="Name"
        defaultValue={props.reducer.user}
        onChange={updateUser}
      />
      <div style={{ margin: "30px 0" }}>
        <TextInput
          style={{ marginBottom: "10px" }}
          id="retroName"
          label="Retrospective name"
          onChange={setRetroName}
        />
        <TextInput
          style={{ marginBottom: "10px" }}
          id="retroPassword"
          label="Retrospective password"
          onChange={setRetroPassword}
        />
        {error.length !== 0 && <div style={{ color: "red", marginBottom: "5px" }}>{error}</div>}
        <Button variant="contained" color="primary" onClick={routeCreateRetro}>
          Skapa retro
        </Button>
      </div>

      test {props.reducer.user}
      <Card />
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
