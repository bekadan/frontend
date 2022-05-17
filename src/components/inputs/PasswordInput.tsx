import React, { FormEvent, useState } from "react";

type PasswordInputProps = {
  label?: string;
  placeholder?: string;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  showError: boolean;
  errorMessage: string;
};

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  (props: PasswordInputProps, ref) => {
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
            type="password"
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

export default PasswordInput;
