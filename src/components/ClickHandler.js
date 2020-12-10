import React from 'react';

function ClickHandler(){


   function handleClick()
    {
        console.log('Handling click event')
    }

    return (
        <div>
            <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default ClickHandler