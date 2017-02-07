import { combineReducers } from 'redux';
import {UNDER_REVIEW, ACCEPTED, REJECTED} from './status';
// action types
import {CLICK_ACCEPT, CLICK_REJECT, UPDATE_SEARCH_FILTER, TOGGLE_FILTER, REMOVE_FILTER, ADD_FILTER, IS_FETCHING_DATA, DID_FETCH_DATA, ERROR_FETCHING_DATA, UNDO} from './actions';

function hackersReducer (hackers = [], action) {
    // Fresh data, override old data. Can be called at initial state too
    if ( action.type === DID_FETCH_DATA ) {
        return action.data.map( (hacker, index) => {
            // assign id to each applicant
            return Object.assign( {}, hacker, {
                id: index
            });
        });
    }

    // Initial state
    if ( typeof hackers === 'undefined' ) {
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

function searchFilterReducer ( state='', action ) {
    // Initial state
    if ( typeof state === 'undefined' )
        return '';
    if ( action.type === UPDATE_SEARCH_FILTER ) {
        return action.value;
    }
    else
        return state;
}

function filtersReducer ( filters = [], action ) {
    // Initial state
    if ( typeof filters === 'undefined' ) {
        return [];
    }

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
    else if ( action.type === ADD_FILTER ) {
        return filters.concat( {
            value: action.value,
            type: action.category,
            selected: true,
            id: Date.now() + Math.floor(Math.random()*1000)
        });
    }
    else
        return filters;
}


function loadingReducer ( state, action ) {
    // initial state
    if ( typeof state === 'undefined' )
        return true;

    if ( action.type === IS_FETCHING_DATA )
        return true;
    else if ( action.type === DID_FETCH_DATA ) {
        return false;
    }

    return state;
}

function errorReducer ( state, action ) {
    // initial state
    if ( typeof state === 'undefined' )
        return '';
    
    // has error
    if ( action.type === ERROR_FETCHING_DATA ) {
        return action.error;
    }
    return state;
}

function HackerApp (state = {}, action ) {
    // Integrate with combineReducers in the future?
    if ( action.type === UNDO  ) {
        if ( state.previousStates.length > 0 ) {
            return state.previousStates.pop();
        }
        else 
            return state;
    }

    let hackers = hackersReducer( state.hackers, action );
    let searchFilter = searchFilterReducer ( state.searchFilter, action );
    let filters = filtersReducer ( state.filters, action );
    let loading = loadingReducer ( state.loading, action );
    let error = errorReducer ( state.error, action );
    let previousStates = ((typeof state.previousStates === 'undefined')? [state] : state.previousStates).concat( state );

    return { hackers, searchFilter, filters, loading, error, previousStates };
}

export default HackerApp;



// WEBPACK FOOTER //
// ./src/components/reducers.js
