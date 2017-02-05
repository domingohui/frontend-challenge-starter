import React from 'react';
import {ACCEPTED, REJECTED} from './status';
import {Button, Icon} from 'react-materialize';
import FilterTag from './FilterTag';

const Hacker = ( {details, onClickAccept, onClickReject} ) => (
    <tr>
        <td>{details.name}</td>
        <td>{details.status}</td>
        {
            details.skills.map( (skill, index) => {
                return ( 
                    <td key={index}><FilterTag 
                        filterThis = {skill.skill}
                        filterId={0}
                        toggleThisFilter={()=>{}}
                        removeThisFilter={undefined}
                        selected={true}
                    /></td>
                )
            })
        }
        <td><Button className={(details.status===ACCEPTED)? 'grey' : ''} waves='light' onClick={()=>onClickAccept(details.id)}>Accept</Button></td>
        <td><Button className={(details.status===REJECTED)? 'grey' : 'red'} waves='light' onClick={()=>onClickReject(details.id)}>Reject</Button></td>
    </tr>
);

export default Hacker;
