import React from 'react';
import {ACCEPTED, REJECTED} from './status';

const Hacker = ( {details} ) => (
    <li>
        {details.name}
    </li>
);

export default Hacker;
