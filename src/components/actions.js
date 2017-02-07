import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();

// Action types
export const CLICK_ACCEPT = 'CLICK_ACCEPT';
export const CLICK_REJECT = 'CLICK_REJECT';
export const UPDATE_SEARCH_FILTER = 'UPDATE_SEARCH_FILTER';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';
export const ADD_FILTER = 'ADD_FILTER';
export const IS_FETCHING_DATA = 'IS_FETCHING_DATA';
export const DID_FETCH_DATA = 'DID_FETCH_DATA';
export const ERROR_FETCHING_DATA = 'ERROR_FETCHING_DATA';
export const UNDO = 'UNDO';


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
        filterId: filterId, // -1 means disabling all filters
    };
};

export const removeFilter = (filterId) => {
    return {
        type: REMOVE_FILTER,
        filterId: filterId
    };
}

export const addFilter = (category, value) => {
    return {
        type: ADD_FILTER,
        category: category,
        value: value
    };
}

export const undo = () => {
    return {
        type: UNDO
    };
}

const startFetchingData = () => {
    return {
        type: IS_FETCHING_DATA
    };
}

const didFinishFetchingData = (data) => {
    return {
        type: DID_FETCH_DATA,
        data: data
    };
}

const errorFetchingData = (error) => {
    return {
        type: ERROR_FETCHING_DATA,
        error: error
    };
};


export function fetchHackers ( url ) {
    // Return dispatch block once

    function getSkillsAddFilterActions (hackers) {
        // Iterate each hacker
        let allHackersSkills = hackers.reduce( (allSkills, hacker) => {
            // Iterate each hacker's skills
            let skills = hacker.skills.map( (skill) => {
                return skill.skill;
            });
            return allSkills.add( ...skills );
        }, new Set());
        let allAddActions = [];
        allHackersSkills.forEach( skill => {
            allAddActions.push(addFilter( 'skills', skill ));
        });
        return allAddActions;
    }

    return (dispatch) => {
        dispatch(startFetchingData);

        return fetch (url).then(
            // parse Json response
            (response) => {
                return response.json();
            }).then( 
                (hackers) => {
                    if ( typeof hackers === 'undefined' ) {
                        dispatch (errorFetchingData('It took too long to get hackers data...'));
                    }
                    else {
                        // good status
                        dispatch(didFinishFetchingData(hackers))
                        // Also add skill filters based on all hackers' skills
                        getSkillsAddFilterActions(hackers).map( (addSkillFilterAction ) => {
                            dispatch( addSkillFilterAction );
                        });
                    }
                },
                error => {
                    dispatch (errorFetchingData(error));
                });
    };
}
