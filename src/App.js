import logo from './logo.svg';
import Greet from './components/Greet'
import React, {Component} from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import HelloWithoutJsx from './components/HelloWithoutJsx';
import Message from './components/Message'
import Counter from './components/Counter'
import ClickHandler from './components/ClickHandler'
import ClassClickHandler from './components/ClassClickHandler';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import StyleSheet from './components/StyleSheet';
import Inline from './components/Inline';

import Form from './components/Form';

import './appStyle.css';
import style from './appStyle.module.css';
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ForwardRefInput from './components/ForwardRefInput';
import ForwardRefParentInput from './components/ForwardRefPrentInput';

class App extends Component {
  render()
  {
    return (
      <div className="App">
     
        
        {/* <Greet name="Rajiv">
          <p>This is children of this Greet element</p>
        </Greet>
        <br></br>
        <Greet name="Sourabh"/>
        <br></br>
        <Greet name="Souvik"/>


        
        <Welcome name="Rajiv"></Welcome>
        <Welcome name="Tania"></Welcome> */}

       {/* <Message></Message>
        <Counter></Counter> */}

        {/* <ClickHandler></ClickHandler>

        <ClassClickHandler></ClassClickHandler> */}

        {/* <EventBind></EventBind> */}

        {/* <ParentComponent></ParentComponent> */}

        {/* <UserGreeting></UserGreeting> */}

        {/* <NameList></NameList> */}

        {/* <PersonList></PersonList> */}

        {/* <StyleSheet primary={true}></StyleSheet> */}

        {/* <Inline></Inline> */}

        {/* <h1 className={style.error}>Error</h1>
        <h1 className='success'>Success</h1> */}

        {/* <Form></Form> */}

        {/* <LifeCycleA></LifeCycleA> */}

        {/* <FragmentDemo></FragmentDemo> */}

        {/* <RefsDemo></RefsDemo> */}

        {/* <FocusInput></FocusInput> */}

        <ForwardRefParentInput></ForwardRefParentInput>

      </div>
    );
  } 
}
export default App;
