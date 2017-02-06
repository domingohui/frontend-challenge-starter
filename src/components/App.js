import React, { Component } from 'react';
import VisibleHackerList from './VisibleHackerList';
import SearchBar from './SearchBar';
import styles from '../assets/App.css';
import logoSvg from '../assets/logo.svg'
import VisibleFilters from './VisibleFilters';
import Error from './Error';
import Undo from './Undo';
require ('../../node_modules/materialize-css/sass/materialize.scss');
import {fetchHackers, addFilter} from './actions';
import {connect} from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';

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

    getDefaultStatusFiltersAddActions () {
        // Generate actions to add default statuses
        let status = [ 'Accepted', 'Rejected', 'Review' ];

        return status.map( (status) => {
            return addFilter( 'status', status );
        });
    }

    componentDidMount() {
        console.log('Heyo! Welcome! Please be patient, I was just fetching data :)');
        console.log('For performance (this is just a quick prototype...), undo is limited to only a few snapshots for now');
        this.props.dispatch(fetchHackers('https://hackthenorth.com/fe-users.json'));
        // Add default filters
        this.getDefaultStatusFiltersAddActions().map( (addFilterAction) => {
            this.props.dispatch( addFilterAction );
        })
        // when starbucks wifi isn't working :(
        //this.props.dispatch(fetchHackers('static/fe-users.json'));
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
                <StickyContainer>
                    <Sticky>
                        <header>
                            <SearchBar />
                            <VisibleFilters />
                            <Undo />
                            <Error />
                        </header>
                    </Sticky>
                    <div>
                        <VisibleHackerList />
                    </div>
                </StickyContainer>
            </div>
        );
    }
}

export default connect()(App);
