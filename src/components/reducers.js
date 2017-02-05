import { combineReducers } from 'redux';
import {UNDER_REVIEW, ACCEPTED, REJECTED} from './status';
// action types
import {CLICK_ACCEPT, CLICK_REJECT, UPDATE_SEARCH_FILTER, TOGGLE_FILTER, REMOVE_FILTER, IS_FETCHING_DATA, DID_FETCH_DATA} from './actions';

function hackers (hackers = [], action) {
    // Fresh data, override old data. Can be called at initial state too
    if ( action.type === DID_FETCH_DATA ) {
        return action.data.map( (hacker, index) => {
            return Object.assign( {}, hacker, {
                id: index
            });
        });
    }

    // Initial state
    if ( typeof hacker === 'undefined' ) {
        console.log("returning initial state: hackers");
        return [];
    }

    let updated_status = '';
    switch (action.type) {
        case CLICK_ACCEPT:
            updated_status = ACCEPTED;
            break;
        case CLICK_REJECT:
            updated_status = REJECTED;
            break;
        default:
            return hackers;
    }

    return hackers.map ( (hacker) => {
        if ( hacker.id === action.id ) {
            let new_status = hacker.status;
            if ( updated_status !== '' ) {
                // Check if same button toggled. if yes, under review again 
                if ( updated_status === hacker.status ) {
                    new_status = UNDER_REVIEW;
                }
                else
                    new_status = updated_status;
            }
            return Object.assign( {}, hacker, {
                status: new_status
            })
        }
        return hacker;
    });
}

function searchFilter ( state='', action ) {
    // Initial state
    if ( typeof state === 'undefined' )
        return '';
    if ( action.type === UPDATE_SEARCH_FILTER ) {
        return action.value;
    }
    else
        return state;
}

function filters ( filters = [], action ) {
    // Initial state
    if ( typeof filters === 'undefined' )
        return [];

    if ( action.type === TOGGLE_FILTER ) {
        // duplicate the filters
        return filters.map( (currFilter) => {
            if ( currFilter.id === action.filterId ) {
                return Object.assign({}, currFilter, {
                    selected: !currFilter.selected
                });
            }
            return currFilter;
        });
    }
    else if ( action.type === REMOVE_FILTER ) {
        return filters.reduce( (result, currFilter) => {
            if ( currFilter.id === action.filterId )
                return result
            else
                return result.concat(currFilter);
        }, []);
    }
    else
        return filters;
}


function loading ( state, action ) {
    if ( typeof state === 'undefined' )
        return true;

    if ( action.type === IS_FETCHING_DATA )
        return true;
    else if ( action.type === DID_FETCH_DATA ) {
        return false;
    }

    return state;
}

const HackerApp = combineReducers ({
    hackers,
    searchFilter,
    filters,
    loading,
});

export default HackerApp;
