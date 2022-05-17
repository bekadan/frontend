import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import PasswordInput from "../../components/inputs/PasswordInput";
import TextInput from "../../components/inputs/TextInput";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const handleSubmit = useCallback(() => {
    if (emailRef.current?.value === "") {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }

    if (passwordRef.current?.value === "") {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
  }, []);

  console.log("rendered");

  return (
    <div className="auth-panel">
      <div className="auth-panel-title">Login</div>
      <div className="auth-panel-subtitle">
        Log in to your DocSaga account to manage your documents.
      </div>
      <TextInput
        errorMessage="Please provide an email address"
        showError={showEmailError}
        ref={emailRef}
        label="Email Address"
      />
      <PasswordInput
        showError={showPasswordError}
        errorMessage="Please provide a password"
        ref={passwordRef}
        label="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default memo(Login);
