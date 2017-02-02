import { connect } from 'react-redux';
import HackerList from './HackerList';
import {accept, reject} from './actions';

const mapStateToProps = (state) => {
    return {
        hackers: state.hackers
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
