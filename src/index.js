import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import reducer from './reducers/reducer'
let store = createStore(reducer)

ReactDOM.render(
        <App />,
document.getElementById('root')
);
