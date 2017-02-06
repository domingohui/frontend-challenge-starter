import React from 'react';
import { connect } from 'react-redux';
import { undo } from './actions';
import { Button } from 'react-materialize';

const mapStateToProps = ( state ) => {
    return {
        hasPreviousStates: state.previousStates.length > 0
    };
}

const mapDispatchToProps = ( dispatch ) => {
    return {
        onClickUndo: () => {
            dispatch( undo () )
        }
    };
}

const undoComponent = ( { hasPreviousStates, onClickUndo } ) => (
    <Button onClick={()=>onClickUndo()}>Undo</Button>
);

const Undo = connect ( mapStateToProps, mapDispatchToProps ) ( undoComponent );

export default Undo;
