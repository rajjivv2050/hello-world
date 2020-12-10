import React,{Component} from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component{
    
    constructor(props){

        super(props)
        this.state ={
            name : 'Rajiv'
        }
        console.log('LifeCycleA constrcutor')
    }



    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){

        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(pervProps,prevState)
    {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate()
    {
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = () =>{
        this.setState({
            name : 'Ka beta kaise ho'
        })
    }

    render()
    {
        console.log('Render () A')
        return (
            <div>
                <h1>This is render () in LCA</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB></LifeCycleB>
               
            </div>
           
        )
    }
}

export default LifeCycleA