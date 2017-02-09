import React from 'react';
import { ACCEPTED, REJECTED } from './status';
import { Button } from 'react-materialize';

const HackerActionButtons = ({status, id, onClickAccept, onClickReject}) => (
    <div>
        <Button className={(status===ACCEPTED)? 'grey' : ''} waves='light' onClick={()=>onClickAccept(id)}>Accept</Button>
        <Button className={(status===REJECTED)? 'grey' : 'red'} waves='light' onClick={()=>onClickReject(id)}>Reject</Button>
    </div>
);

export default HackerActionButtons;
