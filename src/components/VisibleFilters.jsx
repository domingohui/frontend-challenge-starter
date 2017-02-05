import { connect } from 'react-redux';
import Filters from './Filters';
import {toggleFilter,removeFilter} from './actions';

const mapStateToProps = (state) => {
    return {
        available: state.filters,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFilter: (filterId) => {
            dispatch(toggleFilter(filterId))
        },
        removeFilter: (filterId) => {
            dispatch(removeFilter(filterId))
        },
    }
};

const VisibleFilters = connect (
    mapStateToProps,
    mapDispatchToProps) (Filters);

export default VisibleFilters; 
