import { combineReducers } from 'redux';
import {ACCEPTED, REJECTED} from './status';
import {ACCEPT, REJECT} from './actionTypes';

function hackers (state = [], action) {
    let updated_status = '';
    switch (action.type) {
        case ACCEPT:
            updated_status = ACCEPTED;
            break;
        case REJECT:
            updated_status = REJECTED;
            break;
        default:
            return state;
    }

    return state.map ( (hacker, index) => {
        if ( hacker.key === action.index ) {
            return Object.assign( {}, hacker, {
                "status": updated_status
            })
        }
        return hacker;
    });
}


const HackerApp = combineReducers ({
    hackers,
});

export default HackerApp;
