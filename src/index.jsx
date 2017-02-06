import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import HackerApp from './components/reducers';
import $ from 'jquery';

// Give each hacker an id
let store = createStore ( HackerApp, 
    applyMiddleware(
        thunk,
    )
);

ReactDOM.render(
    <div className='container'>
        <Provider store={store}>
            <App />
        </Provider>
    </div>,
    document.getElementById('root')
);
