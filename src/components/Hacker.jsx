import React from 'react';
import {ACCEPTED, REJECTED, UNDER_REVIEW} from './status';
import {Button, Icon} from 'react-materialize';
import FilterTag from './FilterTag';

function StatusBar (props) {
    return (<h4 style={{'color': props.color}}>&#9673;</h4>);
};

function AcceptedStatus () {
    return ( <StatusBar color={'green'} /> );
}

function RejectedStatus () {
    return ( <StatusBar color={'red'} /> );
}

function UnderReviewStatus () {
    return ( <StatusBar color={'yellow'} /> );
}

const Hacker = ( {details, onClickAccept, onClickReject} ) => (
    <tr>
        {details.status === ACCEPTED && <td><AcceptedStatus /></td>}
        {details.status === REJECTED && <td><RejectedStatus /></td>}
        {details.status === UNDER_REVIEW && <td><UnderReviewStatus /></td>}

        <td>{details.name}</td>
            <td>
        {
            // Skill tags
            details.skills.map( (skill, index) => {
                return ( 
                    <FilterTag 
                        filterThis = {skill.skill}
                        filterId={0}
                        toggleThisFilter={()=>{}}
                        removeThisFilter={undefined}
                        selected={true}
                        backgroundColor={'rgb(66,' + parseInt(225-skill.rating*23) + ',' + parseInt(155-skill.rating*15) + ')'}
                        key={index}
                    />
                )
            })
        }
        </td>
        <td><Button className={(details.status===ACCEPTED)? 'grey' : ''} waves='light' onClick={()=>onClickAccept(details.id)}>Accept</Button></td>
        <td><Button className={(details.status===REJECTED)? 'grey' : 'red'} waves='light' onClick={()=>onClickReject(details.id)}>Reject</Button></td>
    </tr>
);

export default Hacker;
