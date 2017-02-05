import { connect } from 'react-redux';
import HackerList from './HackerList';
import {accept, reject} from './actions';

function searchWrapper ( hacker, filtersByCategories, searchForAnyCategory = '' ) {
    // If no filters, return true
    let hasFilters = filtersByCategories.length !== 0;
    if ( !hasFilters && searchForAnyCategory === '' )
        return true;

    let categoryMatch = filtersByCategories.reduce( (result, filter) => {
        return result || hacker[filter.type].includes(filter.value);
    }, false);

    if ( categoryMatch )
        return true;

    let anyCategoryMatch = (searchForAnyCategory === '' ||
        hacker.name.includes(filter.value) ||
        hacker.email.includes(filter.value) ||
        hacker.skills.reduce( (result, skill) => {
            return result || skill.skill.include(searchForAnyCategory);
        }) ||
        hacker.company.includes(filter.value) || 
        hacker.status.includes (filter.value)
    );

    return anyCategoryMatch;
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
        loading: state.loading
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
