// Action creators
export const CLICK_ACCEPT = 'CLICK_ACCEPT';
export const CLICK_REJECT = 'CLICK_REJECT';

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
