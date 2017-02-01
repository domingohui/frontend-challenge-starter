import React from 'react';
import {ACCEPTED, REJECTED} from './status';
import {Button, Icon} from 'react-materialize';

const Hacker = ( {details, id, onClickAccept, onClickReject} ) => (
    <tr>
        <td>{details.name}</td>
        <td>{details.status}</td>
        <td><Button className={(details.status===ACCEPTED)? 'grey' : ''} waves='light' onClick={()=>onClickAccept(id)}>Accept</Button></td>
        <td><Button className={(details.status===REJECTED)? 'grey' : 'red'} waves='light' onClick={()=>onClickReject(id)}>Reject</Button></td>
    </tr>
);

export default Hacker;
