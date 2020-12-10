import React, {Component} from 'react';

class Counter extends Component{

    constructor()
    {
            super()
            this.state = {

            count : 0
        }
    }

    increaseValue()
    {
        // this.setState(
        //     {count : this.state.count + 1},

        //     () => {
        //         console.log('callback function',this.state.count)
        //     }

        // )

        this.setState((prevState) =>({

                count : prevState.count + 1
            })
        )

        // this.setState((prevState,props) =>({

        //     count : prevState.count + 1
        // })
    

    }
    increaseValueByFive()
    {
        this.increaseValue()
        this.increaseValue()
        this.increaseValue()
        this.increaseValue()
        this.increaseValue()
    }

    render()
    {
        return (
            <div>
                <h1>Count Value {this.state.count}</h1>
                <button onClick={ () => this.increaseValueByFive()}>Increment</button>

            </div>
        )
    }
}

export default Counter