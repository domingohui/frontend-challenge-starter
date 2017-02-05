import FilterTag from './FilterTag';
import React from 'react';

function FilterCategory ( {category, filters, toggleFilter, removeFilter} ) {
    return (
        <div className='row'>
            <div className={'col s1'}>{category}</div>
            {filters.map( (filter, index) => (
                    <FilterTag 
                        filterThis={filter.value}
                        filterId={filter.id}
                        toggleThisFilter={toggleFilter}
                        removeThisFilter={removeFilter}
                        selected={filter.selected}
                        className={'col s1'}
                        key={index}
                    />
            ))};
        </div>
    );
}

export default FilterCategory;
