import React, { FormEvent, useState } from "react";

type TextInputProps = {
  label?: string;
  placeholder?: string;
  inline?: boolean;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  onChange,
  label,
  inline,
  placeholder,
}) => {
  const [inlineSet, setInlineSet] = useState(
    typeof inline === "undefined" ? false : true
  );

  if (typeof label === "undefined") {
    return <input onChange={onChange} type="text" className="form-control" />;
  } else {
    return (
      <div className="text-input">
        <label>{label}</label>
        <input
          onChange={onChange}
          placeholder={placeholder}
          type="text"
          className="form-control"
        />
      </div>
    );
  }
};

export default TextInput;
