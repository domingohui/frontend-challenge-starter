import { combineReducers } from 'redux';
import {UNDER_REVIEW, ACCEPTED, REJECTED} from './status';
import {CLICK_ACCEPT, CLICK_REJECT, UPDATE_SEARCH_FILTER} from './actions';

function hackers (state = [], action) {
    let updated_status = '';
    switch (action.type) {
        case CLICK_ACCEPT:
            updated_status = ACCEPTED;
            break;
        case CLICK_REJECT:
            updated_status = REJECTED;
            break;
        default:
            return state;
    }

    return state.map ( (hacker, index) => {
        if ( index === action.id ) {
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
                "status": new_status
            })
        }
        return hacker;
    });
}

function search_filter ( state='', action ) {
    if ( action.type === UPDATE_SEARCH_FILTER ) {
        return action.value;
    }
    else
        return state;
}

const HackerApp = combineReducers ({
    hackers,
    search_filter
});

export default HackerApp;
