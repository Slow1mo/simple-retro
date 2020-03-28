import React from "react";
import { connect } from "react-redux";
import { RootState } from "../App";
import { actions, ReducerState } from "../mainReducer";
import { TextInput } from "../component/TextInput";
import { Card } from "../component/Card";

interface Props {
  reducer: ReducerState;
  setUser: typeof actions.setUser;
}

const Home = (props: Props) => {

  const updateUser = (evt: any) => {
    props.setUser(evt.target.value);
  };

  return (
    <div>
      <TextInput
        id="nameInput"
        label="Name"
        defaultValue={props.reducer.user}
        onChange={updateUser}
      />

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
