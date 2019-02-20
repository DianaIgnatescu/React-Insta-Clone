import React from 'react';

const login = (username, password) => {
  if (username === 'holly' && password === '1234') {
    localStorage.setItem('username', username);
    return true;
  }
  return false;
};

const handleSubmit = (event) => {
  const username = event.target.querySelector('input[name="username"]').value;
  const password = event.target.querySelector('input[name="password"]').value;
  const successfulLogin = login(username, password);
};

const Login = () => (
  <div className="login">
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="username" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">LOGIN</button>
    </form>
  </div>
);

export default Login;
