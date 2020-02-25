import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';


ReactDOM.render(
  <HashRouter>
    {renderRoutes(Routes)}
  </HashRouter>,
  document.getElementById('root'),
);
