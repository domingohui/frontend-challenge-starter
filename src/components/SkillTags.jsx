import React from 'react';
import FilterTag from './FilterTag';

const SkillTags = ( {skills} ) => (
    <div>
        {
            skills.map( (skill, index) => {
                return ( 
                    <FilterTag 
                        filterThis = {skill.skill}
                        filterId={0}
                        toggleThisFilter={()=>{}}
                        removeThisFilter={undefined}
                        selected={true}
                        backgroundColor={'rgb(66,' + parseInt(225-skill.rating*23) + ',' + parseInt(155-skill.rating*15) + ')'}
                        key={index}
                    />
                )
            })
        }
    </div>
)

export default SkillTags;
