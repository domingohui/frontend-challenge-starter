import React from 'react';
import Hacker from './Hacker';

const HackerList = ( { hackers } ) => (
    <ul>
        {hackers.map ( (hacker,index) => 
            <Hacker 
                details={hacker} 
                key={index}
            />
        )}
    </ul>
);

export default HackerList;
