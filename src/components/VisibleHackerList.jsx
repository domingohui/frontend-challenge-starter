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
    let hasFilters = Object.keys(filtersByCategories).length !== 0;
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
    let categoryMatch = !hasFilters || Object.keys(filtersByCategories).reduce( (allCategories, category) => {
        // Use OR within a category, AND between categories
        return allCategories && filtersByCategories[category].reduce( (categoryResult, filter) => {
            return categoryResult || ( (filter.type === 'skills')? 
                searchInArrayOfObjects( filter.value.toLowerCase(), 'skill', hacker[filter.type] ) : 
                hacker[filter.type].toLowerCase().includes(filter.value.toLowerCase()) )
        }, false);
    }, true);

    return anyCategoryMatch && categoryMatch;
}

const mapStateToProps = (state) => {
    // choose selected filteres
    let selectedFiltersByCategories = state.filters.reduce( (byCategories, filter) => {
        if ( filter.selected ) {
            return Object.assign( {}, byCategories, { 
                [filter.type]: (byCategories[filter.type] || []).concat(filter) 
            });
        }
        else
            return byCategories;
    }, {});

    return {
        hackers: state.hackers.filter( (hacker) => {
            return searchWrapper(hacker, selectedFiltersByCategories, state.searchFilter);
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
