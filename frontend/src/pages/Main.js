import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client';

import api from '../core/services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import matchImg from '../assets/itsamatch.png';

import './Main.css';

const Main = ({ match }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [matchDev, setMatchDev] = useState(false);
  const headers = { user: match.params.id };

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id
        }
      });

      setUsers(response.data);
      setLoading(false);
    };

    loadUsers();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id }
    });

    socket.on('match', dev => {
      setMatchDev(dev);
    });
  }, [match.params.id]);

  const handleDislike = async target_id => {
    setLoading(true);

    await api.post(`/devs/${target_id}/dislikes`, null, { headers });
    setUsers(users.filter(user => user._id !== target_id));

    setLoading(false);
  };

  const handleLike = async target_id => {
    setLoading(true);

    await api.post(`/devs/${target_id}/likes`, null, { headers });
    setUsers(users.filter(user => user._id !== target_id));

    setLoading(false);
  };

  return (
    <div className='main-container'>
      <Link to='/'>
        <img src={logo} alt='Tindev' />
      </Link>
      {loading ? (
        <div className='loading-users'>Loading...</div>
      ) : users.length ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt='Usuário' />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>

              <div className='buttons'>
                <button type='button' onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt='dislike' />
                </button>
                <button type='button' onClick={() => handleLike(user._id)}>
                  <img src={like} alt='like' />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='empty-list'>No one to like or dislike...</div>
      )}

      {matchDev && (
        <div className='match-container'>
          <img src={matchImg} alt={`It's a match`} />
          <img
            className='avatar'
            src={matchDev.avatar}
            alt='Avatar'
          />
          <strong>{matchDev.name}</strong>
          <p>{matchDev.bio}</p>
          <button type='button' onClick={() => setMatchDev(false)}>
            CLOSE
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
