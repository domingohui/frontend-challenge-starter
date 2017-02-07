import FilterTag from './FilterTag';
import React from 'react';

function FilterCategory ( {category, filters, toggleFilter, removeFilter, addFilter} ) {
    let newFilterInput;

    return (
        <div>
            <div>{category}</div>
            {filters.map( (filter, index) => (
                <div>
                    <FilterTag 
                        filterThis={filter.value}
                        filterId={filter.id}
                        toggleThisFilter={toggleFilter}
                        removeThisFilter={removeFilter}
                        className={(filter.selected? 'blue' : 'grey')}
                        key={index}
                    />
                    { (index+1) % 3 === 0 && <br key={index+1000}></br> }
                </div>
            ))}
            <form 
                onSubmit={ e =>{
                    e.preventDefault();
                    if ( newFilterInput.value !== '' ) {
                        addFilter( category, newFilterInput.value);
                        newFilterInput.value = '';
                    }
                }}
            >

                <input  
                    placeholder='add filter' 
                    ref={(input) =>{ newFilterInput = input}}
                />
            </form>

        </div>
    );
}

export default FilterCategory;
