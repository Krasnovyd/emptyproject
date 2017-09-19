import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { createRoutes } from './routes'
import { Provider } from 'react-redux'
import { configureStore } from './configureStore'
import { syncHistoryWithStore } from 'react-router-redux'
require('../less/endless.less')

const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)
const routes = createRoutes(store)

render(
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>,
  document.getElementById('app')
)