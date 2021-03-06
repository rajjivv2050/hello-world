import React from 'react';

// function  ForwardRefInput(){
//  return (
//             <div>
//                 <input type="text"></input>
//             </div>
//         )
//     }

const ForwardRefInput = React.forwardRef((props,ref) =>
{
    return (
        <div>
            <input type="text" ref={ref}></input>
            <input type="text" ref={ref}></input>
            <h1>Hero</h1>
        </div>
    )
}
)


export default ForwardRefInput