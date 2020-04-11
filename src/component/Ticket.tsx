import React, { useState } from "react";

interface Props {
  defaultText?: string;
  isEditing?: boolean;
  onChange?: (text: string) => void;
}
export function Ticket(props: Props) {
  const [text, setText] = useState(props.defaultText || "");
  const [isEditing, setIsEditing] = useState(props.isEditing);
  const toggleIsEditing = () => setIsEditing(!isEditing);

  const onSave = () => {
    setIsEditing(false);
    props.onChange && props.onChange(text);
  };

  if (isEditing) {
    return (
      <>
        <div
          style={{
            backgroundColor: "#EEEEEE",
            width: "300px",
            height: "300px",
          }}
        >
          {text}
        </div>
        <hr />
        <div onClick={toggleIsEditing}>Cancel</div>
        <div onClick={onSave}>Save</div>
      </>
    );
  }
  return (
    <>
      <div
        style={{
          backgroundColor: "#EEEEEE",
          width: "300px",
          height: "300px",
        }}
      >
        {text}
      </div>
      <hr />
      <div onClick={toggleIsEditing}>Edit</div>
    </>
  );
}
