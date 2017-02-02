// Action types
export const CLICK_ACCEPT = 'CLICK_ACCEPT';
export const CLICK_REJECT = 'CLICK_REJECT';
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';

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
