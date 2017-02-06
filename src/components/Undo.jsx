import React from 'react';
import { connect } from 'react-redux';
import { undo } from './actions';
import { Button } from 'react-materialize';

const mapStateToProps = ( state ) => {
    return {
        hasPreviousStates: state.previousStates && state.previousStates.length > 3
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



// WEBPACK FOOTER //
// ./src/components/Undo.jsx


// WEBPACK FOOTER //
// ./src/components/Undo.jsx


// WEBPACK FOOTER //
// ./src/components/Undo.jsx


// WEBPACK FOOTER //
// ./src/components/Undo.jsx


// WEBPACK FOOTER //
// ./src/components/Undo.jsx


// WEBPACK FOOTER //
// ./src/components/Undo.jsx


// WEBPACK FOOTER //
// ./src/components/Undo.jsx


// WEBPACK FOOTER //
// ./src/components/Undo.jsx