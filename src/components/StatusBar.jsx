import {ACCEPTED, REJECTED, UNDER_REVIEW} from './status';
import React from 'react';

function StatusBarBase (props) {
    return (<h4 style={{'color': props.color}}>&#9673;</h4>);
};

function AcceptedStatus () {
    return ( <StatusBarBase color={'green'} /> );
}

function RejectedStatus () {
    return ( <StatusBarBase color={'red'} /> );
}

function UnderReviewStatus () {
    return ( <StatusBarBase color={'yellow'} /> );
}

const StatusBar = ({status}) => (
    <div>
        {status === ACCEPTED && <AcceptedStatus />}
        {status === REJECTED && <RejectedStatus />}
        {status === UNDER_REVIEW && <UnderReviewStatus />}
    </div>
)

export default StatusBar;
