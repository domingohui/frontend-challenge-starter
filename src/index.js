import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import HackerApp from './components/reducers';
import $ from 'jquery';

$.get('https://hackthenorth.com/fe-users.json', function (data) {
    let store = createStore ( HackerApp, { 
        "hackers": data,
        "search_filter": 'Search here'
    } );
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
});
