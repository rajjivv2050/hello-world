import React,{Component} from 'react';

class RefsDemo extends Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) =>{
            this.cbRef= element
        }
    }

    componentDidMount()
    {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if(this.cbRef)
        {
            this.cbRef.focus()
        }
    }

    clickHandler = () =>{
        alert(this.cbRef.value)
    }

    render()
    {
        return(
            <div>
                <label>Nornal Ref</label>
                <input type="text" ref={this.inputRef}></input>
                <label>Callback Ref</label>
                <input ref={this.setCbRef} ></input>
                <button onClick={this.clickHandler}>Press it</button>
            </div>
        )
    }




}

export default RefsDemo