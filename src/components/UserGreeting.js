import React,{ Component} from 'react';

class UserGreeting extends Component{

    constructor(props){

        super(props)
        this.state={
            isLoggedIn : false
        }
    }



    render()
    {
        // if(this.state.isLoggedIn)
        // {
        //     return(
        //         <div>
        //             Welcome Rajiv
        //         </div>
        //     )
        // }
        // else
        // {
        //     return (
        //         <div>Welcome Guest</div>
        //     )
        // }

        // Element Variable Approach for conditions

        let message 
        if(this.state.isLoggedIn)
        {
            message = <div>Welcome Rajiv</div>
        }
        else
        {
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>

        
    }
}

export default UserGreeting