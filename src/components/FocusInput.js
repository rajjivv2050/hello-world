import React, {Component} from 'react'
import Input from './Input'

    class FocusInput extends Component{

        constructor()
        {
            super()
            this.parentCompRef= React.createRef()
        }
        clickHandler = () =>{
            this.parentCompRef.current.focusInput()
            
        }
        render()
        {
            return(
                <div>
                    <Input ref={this.parentCompRef}></Input>
                    <button  onClick={this.clickHandler}>Click to focus</button>
                </div>
            )
        }
    }

    export default FocusInput
