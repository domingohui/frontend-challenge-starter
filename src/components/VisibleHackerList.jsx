import { connect } from 'react-redux';
import HackerList from './HackerList';
import {accept, reject} from './actions';

function searchWrapper ( hacker, filtersByCategories, searchForAnyCategory = '' ) {
    // If no filters, return true
    let hasFilters = filtersByCategories.length !== 0;
    if ( !hasFilters && searchForAnyCategory === '' )
        return true;

    // Check each category 
    let categoryMatch = Object.keys(filtersByCategories).reduce( (result, category) => {
        return result || searchFor( hacker, category );
    }, false);

    if (categoryMatch)
        return true;

    let anyCategoryMatch = (searchForAnyCategory === '' || containInAnyCategory ( hacker, searchForAnyCategory ) );

    return anyCategoryMatch;
}

const mapStateToProps = (state) => {
    // choose selected filteres
    let selectedFilters = state.filters.filter( (filter) => {
        return filter.selected;
    });

    return {
        hackers: state.hackers.filter( (hacker) => {
            return true;
            return searchWrapper(hacker, selectedFilters, state.searchFilter);
        })
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
