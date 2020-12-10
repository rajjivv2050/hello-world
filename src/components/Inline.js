import React from 'react';

function Inline()
{
    //Create an object and apply it to the style attribute

    const heading = {
        color : 'red',
        fontSize : '90px'
    }



    return(
        <div>
           <h1 style={heading}> Inline Styling isko bolte hai </h1>
        </div>
    )
}

export default Inline