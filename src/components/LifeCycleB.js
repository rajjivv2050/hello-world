import React,{Component} from 'react';

class LifeCycleB extends Component{
    
    constructor(props){

        super(props)
        this.state ={
            name : 'Sourabh'
        }
        console.log('LifeCycleB constrcutor')
    }

    shouldComponentUpdate(){

        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(pervProps,prevState)
    {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate()
    {
        console.log('LifecycleB componentDidUpdate')
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount()
    {
        console.log('LifeCycleB componentDidMount')
    }

    render()
    {
        console.log('Render () B')
        return (
            <div>
                <h1>This is render () in LCB</h1>
               
            </div>
           
        )
    }
}

export default LifeCycleB