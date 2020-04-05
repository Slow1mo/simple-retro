import React from "react";

interface Props {
  text: string;
}

export const Ticket = (props: Props) => {
  return (
    <div style={{ border: "1px solid chocolate", padding: "5px" }}>
      <div>{props.text}</div>
    </div>
  );
};
