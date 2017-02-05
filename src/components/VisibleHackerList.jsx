import { connect } from 'react-redux';
import HackerList from './HackerList';
import {accept, reject} from './actions';

function searchWrapper ( hacker, filtersByCategories, searchForAnyCategory = '' ) {
    // If no filters, return true
    let hasFilters = filtersByCategories.length !== 0;
    if ( !hasFilters && searchForAnyCategory === '' )
        return true;

    let searchForAnyCategoryLowerCase = searchForAnyCategory.toLowerCase();

    let anyCategoryMatch = (searchForAnyCategoryLowerCase === '' ||
        hacker.name.toLowerCase().includes(searchForAnyCategoryLowerCase) ||
        hacker.email.includes(searchForAnyCategoryLowerCase) ||
        hacker.skills.reduce( (result, skill) => {
            return result || skill.skill.include(searchForAnyCategoryLowerCase);
        }) ||
        hacker.company.includes(searchForAnyCategoryLowerCase) || 
        hacker.status.includes (searchForAnyCategoryLowerCase)
    );

    // Then check each category filters
    let categoryMatch = !hasFilters || filtersByCategories.reduce( (result, filter) => {
        return result || hacker[filter.type].includes(filter.value);
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
