import React from 'react'
import ReactDOM from 'react-dom'

import 'animate.css/animate.min.css'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import '@blueprintjs/datetime/lib/css/blueprint-datetime.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'storm-react-diagrams/dist/style.min.css'

import { Provider } from 'react-redux'
import { configureStore } from './Store'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

let store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
