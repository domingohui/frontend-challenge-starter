// Action creators
import {CLICK_ACCEPT, CLICK_REJECT} from './actionTypes';

export const accept = (id) => {
    return {
        type: CLICK_ACCEPT,
        id: id
    };
};

export const reject = (id) => {
    return {
        type: CLICK_REJECT,
        id: id
    };
};
