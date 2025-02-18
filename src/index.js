import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import reducer from './reducers'
import middleware from './middleware'
import App from './components/App'

const store = createStore(reducer, middleware);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, rootElement);