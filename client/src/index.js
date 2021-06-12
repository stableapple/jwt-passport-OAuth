import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import Welcome from './Components/Welcome'
import { BrowserRouter, Route} from 'react-router-dom'
import Signup from './Components/auth/Signup'
import {Provider} from 'react-redux'
import{createStore} from 'redux'
import reducers from './reducers'

ReactDOM.render(
    <Provider store={createStore(reducers, {})}>
    <BrowserRouter>
    <App >
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
    </App>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)

