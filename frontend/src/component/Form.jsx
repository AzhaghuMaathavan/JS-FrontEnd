import React, {useRef} from "react"

function LoginForm() {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    console.log(formData);

    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
    emailInputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" ref={emailInputRef} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" ref={passwordInputRef} />

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm

/*App.js

import React from 'react';
import './assets/css/App.css';
import LoginForm from "./components/Form";

function App() {

  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default App;
*/