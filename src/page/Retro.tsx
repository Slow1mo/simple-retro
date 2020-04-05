import React from "react";
import { connect } from "react-redux";
import { RootState } from "../App";
import { actions, ReducerState } from "../mainReducer";
import faker from "faker";
import { Ticket } from "../component/Ticket";

interface Props {
  reducer: ReducerState;
  setUser: typeof actions.setUser;
}

const tickets = new Array(7)
  .fill(true)
  .map(() => ({ text: faker.lorem.sentence() }));

const Retro = (props: Props) => {
  console.log("tickets", tickets);
  return (
    <div>
      <h1>My retro</h1>
      <div className="grid-container grid-container--fill">
      {tickets.map(ticket => (
        <Ticket key={ticket.text} text={ticket.text} />
        ))}
        </div>
    </div>
  );
};

const mapState = (state: RootState) => ({
  reducer: state.mainReducer
});

const mapDispatch = {
  setUser: actions.setUser
};

export default connect(mapState, mapDispatch)(Retro);
