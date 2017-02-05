import React from 'react';
import Hacker from './Hacker';
import {Button, Icon} from 'react-materialize';

const HackerList = ( { hackers, loading, onClickAccept, onClickReject} ) => (
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
