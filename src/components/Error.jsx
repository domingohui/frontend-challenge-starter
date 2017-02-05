import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        error: state.error
    };
};

const error = ( {error} ) => (
    <div>{error.message || error || ''}</div>
);

const Error = connect ( mapStateToProps, undefined) (error);

export default Error;

