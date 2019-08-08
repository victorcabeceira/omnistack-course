import React, { useState } from 'react';

import api from '../core/services/api';

import logo from '../assets/logo.svg';
import './Login.css';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    const response = await api.post('/devs', {
      username
    });

    const { _id } = response.data;
    history.push(`/dev/${_id}`);
  };

  return (
    <div className='login-container'>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt='Tindev' />
        <input
          placeholder='Digite seu usuário no Github'
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
};

export default Login;
