import React from 'react';

function Person({person})
{
    return (
        <div>My name is {person.name}. I know {person.skill}</div>
    )
}

export default Person