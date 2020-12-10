import React from 'react';
import Person from './Person';

function PersonList(){

    const personList = [
        {
            id : 1,
            name : 'Rajiv',
            skill : 'java'
        },
        {
            id: 2,
            name: 'Avirup',
            skill : 'react'
        }
    ]

    const person = personList.map(person => (
        <Person person={person} key={person.id}></Person>
    ))

    return(
    <div><h1>{person}</h1></div>
    )
}

export default PersonList