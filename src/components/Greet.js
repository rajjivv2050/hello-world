import React from 'react'

// function Greet()
// {
//     return <h1>Hello World</h1>
// }



//arrow function for same
const Greet = (props) =>{
    console.log(props.name)

    return (
    <div>
        <hi>Hello {props.name}</hi> 
        <h1>{props.children}</h1>
    </div>
     )
}

export default Greet