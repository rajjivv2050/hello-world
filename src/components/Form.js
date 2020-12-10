import React,{Component} from 'react';

class Form extends Component{

    constructor(props)
    {
        super(props)
        this.state={
            userName: '',
            comments: '',
            topic : ''
        }
    }
    
    handleUserNameChange = (event) =>{

        this.setState({
            userName : event.target.value
        })
    }


    handleCommentsChange = (event) => {

        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {

        this.setState({
            topic: event.target.value
        })
    }

    handleForm = (event) =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render()
    {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <label>Username</label>
                    <input type='text' value={this.state.userName} onChange={this.handleUserNameChange}></input>
                    <div>
                        <label>Comments</label>
                        <textarea type='text' value={this.state.comments} onChange={this.handleCommentsChange}></textarea>

                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value='react'>React</option>
                            <option value='angular'>Angular</option>
                        </select>
                            
                    </div>
                    <button type="submit">Submit</button>
                </form>
               
            </div>
        )
    }
}

export default Form