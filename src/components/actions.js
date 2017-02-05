import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

// Action types
export const CLICK_ACCEPT = 'CLICK_ACCEPT';
export const CLICK_REJECT = 'CLICK_REJECT';
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const IS_FETCHING_DATA = 'IS_FETCHING_DATA';
export const DID_FETCH_DATA = 'DID_FETCH_DATA';

// Action creators
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

export const updateSearchFilter = (searchFor) => {
    return {
        type: UPDATE_SEARCH_FILTER,
        value: searchFor
    };
};

export const toggleFilter = (filterId) => {
    return {
        type: TOGGLE_FILTER,
        filterId: filterId,
    };
};

export const removeFilter = (filterId) => {
    return {
        type: REMOVE_FILTER,
        filterId: filterId
    };
}

export const startFetchingData = () => {
    return {
        type: IS_FETCHING_DATA
    };
}

export const didFinishFetchingData = (data) => {
    return {
        type: DID_FETCH_DATA,
        data: data
    };
}


export function fetchHackers ( url ) {
    return (dispatch) => {
        dispatch(startFetchingData);

        return fetch (url).then((response) => response.json() ).then( hackers => {
            dispatch(didFinishFetchingData(hackers))
        });
    };
}
