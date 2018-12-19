import React from 'react';
import ReactDom from 'react-dom';
// const App = require('./containers/app.jsx')
import App from './containers/app.jsx';
require('./scss/base.scss');

ReactDom.render(
  <App/>,
  document.getElementById('app')
 )
