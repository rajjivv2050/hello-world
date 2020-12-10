import React, {Component} from 'react';

class Message extends Component{

    constructor()
    {
        super()
        this.state = {
            message: 'Welcome visitor babua'
        }
    }

changeMessage()
{
    this.setState ( {
        message : 'Thanks for Subscribing babua'
    })
}

    render()
    {
        return(
            <div>
                {this.state.message}
                <br/>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message