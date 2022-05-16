import React from "react";
import TextInput from "../../components/inputs/TextInput";

const Login: React.FC = () => {
  return (
    <div className="auth-panel">
      <div className="auth-panel-title">Login</div>
      <div className="auth-panel-subtitle">
        Log in to your DocSaga account to manage your documents.
      </div>
      <TextInput placeholder="Type your email address" label="Email Address" />
      <TextInput label="Email Address" />
    </div>
  );
};

export default Login;
