import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import LoginStyle from '../styles/LoginStyle';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handlePassword = ({ target }) => {
    const { value } = target;
    setPassword(value);
  };

  const regex = /\S+@\S+\.\S+/;
  const number = 6;
  const condition = regex.test(email) && password.length > number;

  const handleSubmit = (e) => {
    e.preventDefault();

    const template = { email };
    localStorage.setItem('user', JSON.stringify(template));

    history.push('/meals');
  };

  return (
    <LoginStyle>
      <form
        onSubmit={ handleSubmit }
      >
        <input
          type="email"
          value={ email }
          placeholder="Email"
          data-testid="email-input"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          value={ password }
          placeholder="Senha"
          data-testid="password-input"
          onChange={ handlePassword }
        />
        <button
          type="submit"
          disabled={ !condition }
          data-testid="login-submit-btn"
        >
          Enter
        </button>
      </form>
      <Footer />
    </LoginStyle>
  );
}

export default Login;
