import React, {Component} from 'react';

class Welcome extends Component{

   
    
    render()
    {
        return (

        <h1>Welcome to {this.props.name}'s React Application.</h1>
        )
    }
}
//The value of props is not changeable. It's immutable.
export default Welcome