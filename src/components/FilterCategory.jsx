import FilterTag from './FilterTag';
import React from 'react';

function FilterCategory ( {category, filters, toggleFilter, removeFilter, addFilter} ) {
    let newFilterInput;

    return (
        <div>
            <div style={{fontSize:20}}>{category}</div>
            {filters.map( (filter, index) => (
                <div key={'f'+index}>
                    <FilterTag 
                        filterThis={filter.value}
                        filterId={filter.id}
                        toggleThisFilter={toggleFilter}
                        removeThisFilter={removeFilter}
                        className={(filter.selected? 'blue' : 'grey')}
                        key={filter.id}
                    />
                    { (index+1) % 3 === 0 && <br></br> }
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
