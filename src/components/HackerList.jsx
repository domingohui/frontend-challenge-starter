import React from 'react';
import Hacker from './Hacker';
import {Button, Icon} from 'react-materialize';

const HackerList = ( { hackers, onClickAccept, onClickReject} ) => (
    <table className='bordered'>
        <tbody>
            {hackers.map ( (hacker, index) => 
                <Hacker 
                    details={hacker} 
                    onClickAccept={onClickAccept}
                    onClickReject={onClickReject}
                    key={index}
                />
            )}
            { (hackers.length === 0) &&
                    <tr>
                        <th>
                            No results. Try removing filters.
                        </th>
                    </tr>
            }
        </tbody>
    </table>
);

export default HackerList;
