import { connect } from 'react-redux';
import HackerList from './HackerList';

const mapStateToProps = (state) => {
    return {
        hackers: state.hackers
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const VisibleHackerList = connect (
    mapStateToProps,
    mapDispatchToProps
)(HackerList);

export default VisibleHackerList;
