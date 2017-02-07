import React from 'react';
import {Tag} from 'react-materialize';

const FilterTag = ( {filterThis, filterId, toggleThisFilter, removeThisFilter, className, backgroundColor='blue'} ) => (
    <div 
        className={'chip ' + className}
        onClick={()=>toggleThisFilter(filterId)}
        style={{ color: 'white', fontSize: '14px', backgroundColor: backgroundColor, display: 'block', width: 150 }}
    >
        { removeThisFilter &&
                <input type='button' onClick={()=>removeThisFilter(filterId)} style={{'marginRight': '5px', color: 'red',}} value='x' />
        }
        {filterThis}
    </div>
)

export default FilterTag;
