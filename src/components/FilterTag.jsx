import React from 'react';
import {Tag} from 'react-materialize';

const FilterTag = ( {filterThis, filterId, toggleThisFilter, removeThisFilter, className, backgroundColor='blue'} ) => (
    <div 
        className={'chip ' + className}
        onClick={()=>toggleThisFilter(filterId)}
        style={{display: 'inline', color: 'white', 'fontSize': '14px', backgroundColor: backgroundColor}}
    >
        { removeThisFilter &&
                <input type='button' onClick={()=>removeThisFilter(filterId)} style={{display: 'inline', 'marginRight': '5px', color: 'red',}} value='x' />
        }
        {filterThis}
    </div>
)

export default FilterTag;
