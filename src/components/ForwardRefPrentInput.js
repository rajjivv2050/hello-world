import React, {Component} from 'react';
import ForwardRefInput from './ForwardRefInput';

class ForwardRefParentInput extends Component{

constructor(){
    super()
    this.inputRef= React.createRef()
}
clickHandler = () =>{

    this.inputRef.current.focus()
}

    render()
    {
        return (
            <div>
               <ForwardRefInput ref={this.inputRef}></ForwardRefInput>
               <button onClick={this.clickHandler}>Click to Focus</button>
            </div>
        )
    }
}

export default ForwardRefParentInput