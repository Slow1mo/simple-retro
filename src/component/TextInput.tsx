import React from "react";

interface Props {
  id: string;
  label: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  style?: any
}

export const TextInput = (props: Props) => {
  const { id, label, defaultValue } = props;
  const onChange = (evt: any) => props.onChange(evt.target.value);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "200px", ...props.style }}>
      <label htmlFor={id}>{label}</label>
      <input
        tabIndex={0}
        type="text"
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
};
