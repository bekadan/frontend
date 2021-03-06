import React, { FormEvent } from "react";

type TextInputProps = {
  label?: string;
  placeholder?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  showError: boolean;
  errorMessage: string;
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    if (typeof props.label === "undefined") {
      return (
        <input onChange={props.onChange} type="text" className="form-control" />
      );
    } else {
      return (
        <div className="text-input">
          <label>{props.label}</label>
          <input
            ref={ref}
            onChange={props.onChange}
            placeholder={props.placeholder}
            type="text"
            className="form-control"
          />
          {props.errorMessage !== "" && props.showError === true && (
            <small>{props.errorMessage}</small>
          )}
        </div>
      );
    }
  }
);

export default TextInput;
