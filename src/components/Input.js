import React, {Component} from 'react';

class Input extends Component{

    constructor()
    {
        super()
        this.inputRef = React.createRef()

    }
    focusInput()
    {
        this.inputRef.current.focus()
        
    }
    render()
    {
        return (
            <div>
                <label>Username</label>
                <input ref={this.inputRef}></input>
            </div>
        )
    }
}

export default Input