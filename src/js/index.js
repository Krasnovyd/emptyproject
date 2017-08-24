import React from 'react'
import { render } from 'react-dom'
import App from './app'
var less = require('../less/endless.less')

render(
  <App />,
  document.getElementById('app')
);