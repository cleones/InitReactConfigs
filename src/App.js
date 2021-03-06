import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';

import './config/ReactotronConfig';

import history from './services/history';

import GoblaStyle from './styles/global';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
        <GoblaStyle />
      </Router>
    </>
  );
}

export default App;
