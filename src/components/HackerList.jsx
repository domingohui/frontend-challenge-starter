import React from 'react';
import Hacker from './Hacker';
import {Button, Icon} from 'react-materialize';

const HackerList = ( { hackers, onClickAccept, onClickReject} ) => (
    <table className='bordered'>
        <tbody>
            {hackers.map ( (hacker,index) => 
                <Hacker 
                    details={hacker} 
                    id={index}
                    onClickAccept={onClickAccept}
                    onClickReject={onClickReject}
                    key={index}
                />
            )}
        </tbody>
    </table>
);

export default HackerList;
