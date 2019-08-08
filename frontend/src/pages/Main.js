import React from 'react';

// import { Container } from './styles';

const Main = ({ match }) => {
  return (<div>{match.params.id}</div>);
};

export default Main;
