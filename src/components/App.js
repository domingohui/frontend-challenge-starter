import React, { Component } from 'react';
import VisibleHackerList from './VisibleHackerList';
import SearchBar from './SearchBar';
import styles from '../assets/App.css';
import logoSvg from '../assets/logo.svg'
import Filters from './Filters';
require ('../../node_modules/materialize-css/sass/materialize.scss');

/*
 * state: {
 *     hackers: [
 *         ...
 *     ],
 *
 *     searchFilter: '',
 *
 *     availableFilters: [
 *         '...',
 *         '...',
 *     ],
 *
 *     selectedFilters: [
 *         '...',
 *         '...',
 *     ],
 *
 *     customizedFilters: [
 *         '...',
 *         '...',
 *     ]
 * }
*/
class App extends Component {
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
                    <Filters />
                    <VisibleHackerList />
                </section>
            </div>
        );
    }
}

export default App;
