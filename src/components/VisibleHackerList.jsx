import { connect } from 'react-redux';
import HackerList from './HackerList';
import {accept, reject} from './actions';

function searchInArrayOfObjects ( searchFor, key, inArray ) {
    // inArray: [ 
    //         {
    //             key1: '...',
    //             key2: '...', ...
    //         },
    //         {
    //             key1: '...'...
    //         },...
    //      ]
    // key: key to the value to search in
    // e.g. key can be 'key1' or 'key2'
    return inArray.reduce( (result, curr) => {
        return result || curr[key].toLowerCase().includes( searchFor.toLowerCase() );
    }, false);
}

function searchWrapper ( hacker, filtersByCategories, searchForAnyCategory = '' ) {
    // If no filters, return true
    let hasFilters = filtersByCategories.length !== 0;
    if ( !hasFilters && searchForAnyCategory === '' )
        return true;

    let searchForAnyCategoryLowerCase = searchForAnyCategory.toLowerCase();

    let anyCategoryMatch = (searchForAnyCategoryLowerCase === '' ||
        hacker.name.toLowerCase().includes(searchForAnyCategoryLowerCase) ||
        hacker.email.toLowerCase().includes(searchForAnyCategoryLowerCase) ||
        searchInArrayOfObjects( searchForAnyCategoryLowerCase, 'skill', hacker['skills'] ) ||
        hacker.company.toLowerCase().includes(searchForAnyCategoryLowerCase) || 
        hacker.status.toLowerCase().includes (searchForAnyCategoryLowerCase)
    );

    // Then check each category filters
    let categoryMatch = !hasFilters || filtersByCategories.reduce( (result, filter) => {
        return result || (
            (filter.type === 'skills')? 
            searchInArrayOfObjects( filter.value.toLowerCase(), 'skill', hacker[filter.type] ) : 
            hacker[filter.type].toLowerCase().includes(filter.value.toLowerCase()));
    }, false);

    return anyCategoryMatch && categoryMatch;
}

const mapStateToProps = (state) => {
    // choose selected filteres
    let selectedFilters = state.filters.filter( (filter) => {
        return filter.selected;
    });

    return {
        hackers: state.hackers.filter( (hacker) => {
            return searchWrapper(hacker, selectedFilters, state.searchFilter);
        }),
        loading: state.loading,
        totalCountHackersUnfiltered: state.hackers.length,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAccept: (id) => {
            dispatch( accept(id) )
        },
        onClickReject: (id) => {
            dispatch( reject(id) )
        }
    };
};

const VisibleHackerList = connect (
    mapStateToProps,
    mapDispatchToProps
)(HackerList);

export default VisibleHackerList;
