import React, {Component} from 'react';

class EventBind extends Component{
    

    constructor()
    {
        super()
        this.state = {
            message : 'Hello'
        }

        this.clickHandler=this.clickHandler.bind(this)
    }

    clickHandler()
    {
        this.setState({
            message : 'Goodbye!'
        })
    }

    render()
    {
        return (
            <div>
                {this.state.message}
                <br></br>
                <button onClick={this.clickHandler}>Click to say goodbye!</button>
            </div>
        )
    }
}

export default EventBind