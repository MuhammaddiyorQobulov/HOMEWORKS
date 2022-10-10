import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
