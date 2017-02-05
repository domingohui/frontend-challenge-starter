import React, { Component } from 'react';
import VisibleHackerList from './VisibleHackerList';
import SearchBar from './SearchBar';
import styles from '../assets/App.css';
import logoSvg from '../assets/logo.svg'
import VisibleFilters from './VisibleFilters';
require ('../../node_modules/materialize-css/sass/materialize.scss');
import {fetchHackers} from './actions';
import {connect} from 'react-redux';

/*
 * state: {
 *     hackers: [
 *         {
 *             name: '...',
 *             ...,
 *             ...,
 *             id: 1
 *         },
 *         ...
 *     ],
 *
 *     searchFilter: '',
 *
 *     filters: [
 *         {
 *             value: '...',
 *             type: 'status',
 *             selected: true,
 *             id: 1
 *         },
 *         ...
 *     ]
 * }
 */
class App extends Component {

    constructor( props ) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchHackers('https://hackthenorth.com/fe-users.json'));
    }

    render() {
        return (
            <div>
                <header className='header'>
                    <div className='logo'>
                        <img src={logoSvg}/>
                    </div>
                    <h1>Hack the North Frontend Challenge</h1>
                </header>
                <section>
                    <SearchBar />
                    <VisibleFilters />
                    <VisibleHackerList />
                </section>
            </div>
        );
    }
}

export default connect()(App);
