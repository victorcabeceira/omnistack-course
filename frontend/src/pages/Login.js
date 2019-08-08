import React from 'react';

import logo from '../assets/logo.svg';

import './Login.css';

const Login = () => {
  return (
    <div className='login-container'>
      <form>
        <img src={logo} alt='Tindev' />
        <input
          placeholder='Digite seu usuário no Github'
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Login;
