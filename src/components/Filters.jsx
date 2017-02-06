import FilterTag from './FilterTag';
import FilterCategory from './FilterCategory';
import React from 'react';

function Filters ( {available, toggleFilter, removeFilter} ) {
    let filtersByCategory = available.reduce( (byCategory, filter) => {
        return Object.assign(
            {}, byCategory, 
            {[filter.type]: 
                // If this category array is empty, initialize it 
                (byCategory[filter.type] || []).concat( filter )
            }
        );
    }, {});

    // Make sure filters categories are always displayed
    let mandatoryCategories = [ 'company', 'name', 'skills', 'status' ];
    mandatoryCategories.map( (category) => {
        if ( !filtersByCategory[category] )
            filtersByCategory[category] = [];
    });

    return (
        <div >
            {
                // For each category, render a FilterCategory
                Object.keys(filtersByCategory).map((category, index) => (
                    <FilterCategory 
                        category={category} 
                        filters={filtersByCategory[category]} 
                        toggleFilter={toggleFilter}
                        removeFilter={removeFilter}
                        key={index}
                    />
                ))
            }
        </div>
    )
}

export default Filters;

// WEBPACK FOOTER //
// ./src/components/Filters.jsx
