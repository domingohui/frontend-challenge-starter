import React from 'react';
import Hacker from './Hacker';
import {Button, Icon} from 'react-materialize';

const HackerList = ( { hackers, loading, totalCountHackersUnfiltered, onClickAccept, onClickReject} ) => (
    <table className='bordered'>
        <tbody>
            <tr>
                <th>
                    { 
                        ((hackers.length === totalCountHackersUnfiltered)? 
                            'All' : hackers.length + ' of ' + totalCountHackersUnfiltered) 
                            + ' selected'
                    }
                </th>
            </tr>
            <tr>
                <th>Status</th>
                <th>Name</th>
                <th>Skills (darker=stronger)</th>
                <th></th>
                <th></th>
            </tr>
            {hackers.map ( (hacker, index) => 
                <Hacker 
                    details={hacker} 
                    onClickAccept={onClickAccept}
                    onClickReject={onClickReject}
                    key={index}
                />
            )}
            <tr>
                { (hackers.length === 0) &&
                        <th>
                            No results. Try removing filters.
                        </th>
                }
                { loading &&
                        <th>
                            Loading...
                        </th>
                }
            </tr>
        </tbody>
    </table>
);

export default HackerList;
