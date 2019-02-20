import React from 'react';
import LogoIg from '../../assets/insta-logo.svg';
import './Login.css';

const login = (username, password) => {
  if (username === 'hollywood91@gmail.com' && password === '1234') {
    localStorage.setItem('username', username);
    return true;
  }
  return false;
};

const handleSubmit = (event) => {
  const username = event.target.querySelector('input[name="username"]').value;
  const password = event.target.querySelector('input[name="password"]').value;
  const successfulLogin = login(username, password);
  if (!successfulLogin) {
    event.preventDefault();
  }
};

const Login = () => (
  <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
      <img src={LogoIg} alt="instagram-logo" />
      <input name="username" placeholder="username" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">LOGIN</button>
    </form>
  </div>
);

export default Login;
