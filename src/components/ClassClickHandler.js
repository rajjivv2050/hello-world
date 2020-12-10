import React, {Component} from 'react';

class ClassClickHandler extends Component{

    clickHandler()
    {
        console.log('clicked from class')
    }



    render()
    {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me Please</button>
            </div>
        )
    }
}

export default ClassClickHandler