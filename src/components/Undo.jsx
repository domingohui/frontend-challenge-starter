import React from 'react';
import { connect } from 'react-redux';
import { undo } from './actions';
import { Button } from 'react-materialize';

const mapStateToProps = ( state ) => {
    let numOfPreviousStates = (state.previousStates)? state.previousStates.length : 0;
    return {
        // If the last state has hackers
        hasPreviousStates: numOfPreviousStates > 0 
        && state.previousStates[numOfPreviousStates-1].hackers 
        && state.previousStates[numOfPreviousStates-1].hackers.length > 0
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
    <Button disabled={!hasPreviousStates} onClick={()=>onClickUndo()}>Undo</Button>
);

const Undo = connect ( mapStateToProps, mapDispatchToProps ) ( undoComponent );

export default Undo;
