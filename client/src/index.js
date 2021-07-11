import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import Welcome from './Components/Welcome'
import { BrowserRouter, Route} from 'react-router-dom'
import Signup from './Components/auth/Signup'
import {Provider} from 'react-redux'
import{createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
import { reducer } from 'redux-form'

const store = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
)
ReactDOM.render(

    <Provider store={store}>
    <BrowserRouter>
    <App >
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
    </App>
    </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)

