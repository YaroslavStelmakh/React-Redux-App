import ReactDOM from 'react-dom';
import React from 'react'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/rootReducer";

import App from './App'

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

ReactDOM.render(<Provider store={store}><App /></Provider>
    , document.getElementById('root'));

