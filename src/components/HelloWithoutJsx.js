import React from 'react';

const HelloWithoutJsx = () =>{
    return React.createElement('div',
    null,
    React.createElement('h1',{id:'hello',className:'Hello'},"Hello beta Rajiv")
    )
}

export default HelloWithoutJsx