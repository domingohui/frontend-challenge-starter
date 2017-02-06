import FilterTag from './FilterTag';
import React from 'react';

function FilterCategory ( {category, filters, toggleFilter, removeFilter, addFilter} ) {
    let newFilterInput;

    return (
        <div className='row'>
            <div className={'col l1'}>{category}</div>
            {filters.map( (filter, index) => (
                    <FilterTag 
                        filterThis={filter.value}
                        filterId={filter.id}
                        toggleThisFilter={toggleFilter}
                        removeThisFilter={removeFilter}
                        className={'col l1 ' + (filter.selected? 'blue' : 'grey')}
                        key={index}
                    />
            ))};
            <form 
                onSubmit={ e =>{
                    e.preventDefault();
                    if ( newFilterInput.value !== '' ) {
                        addFilter( category, newFilterInput.value);
                        newFilterInput.value = '';
                    }
                }}
                style={{display: 'inline'}} >

                <input 
                    className='col l1' 
                    placeholder='add filter' 
                    ref={(input) =>{ newFilterInput = input}}
                    style={{display: 'inline'}}
                />
            </form>

        </div>
    );
}

export default FilterCategory;
