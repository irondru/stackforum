import registerServiceWorker from './registerServiceWorker';

import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

import './index.css'

const target = document.querySelector('#root')

render(<App />, target)

registerServiceWorker();
