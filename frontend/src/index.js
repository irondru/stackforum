import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { routes } from 'core'
import ReduxModal from 'react-redux-modal'

import configureStore from 'core/store'

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
      <div id="provider">
        <Router history={history} routes={routes} />
        <ReduxModal />
      </div>
    </Provider>,
    document.querySelector('#root')
)
