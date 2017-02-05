import React from 'react';
import {Tag} from 'react-materialize';

const FilterTag = ( {filterThis, filterId, toggleThisFilter, removeThisFilter, selected, className} ) => (
    <div 
        className={'chip ' + (selected? 'blue' : 'grey') + ' ' + className}
        onClick={()=>toggleThisFilter(filterId)}
        style={{display: 'inline'}}
    >
        {filterThis}
        <input type='button' onClick={()=>removeThisFilter(filterId)} style={{color: 'red', display: 'inline'}} value='x' />
    </div>
)

export default FilterTag;
