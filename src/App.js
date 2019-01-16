import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Greet from './components/greet/Greet';
import Welcome from './components/classComponents/Welcome';
import Hello from './components/jSX/Hello';
import Message from './components/message/Message';
import Counter from './components/setState/Counter';
import FunctionClick from './components/eEventHandling/FunctionClick';
import ClassClick from './components/eEventHandling/ClassClick';
import EventBind from './components/bindingEventHandlers/EventBind';
import ParentComponent from './components/methodsProps/ParentComponent';
import UserGreeting from './components/conditionalRendering/UserGreeting';
import NameList from './components/listRendering/NameList';
import IndexKey from './components/indexKeyAnti-pattern/IndexKey';
import Stylesheet from './components/stylingAndCSSBasics/Stylesheet';
import Inline from './components/stylingAndCSSBasics/Inline';
import './components/stylingAndCSSBasics/appStyle.css';
import styles from './components/stylingAndCSSBasics/appStyle.module.css';
import Form from './components/basics_Form_Handling/Form';
import LifecicleA from './components/componentMountingLiefcycleMethods/LifecicleA';
import FragmentDemo from './components/fragments/FragmentDemo';
import Table from './components/fragments/Table';
import ParentComp from './components/pureComponents/ParentComp';
import ParentComp2 from './components/memo/ParentComponet2';
import RefsDemo from './components/refs/RefsDemo';
import FocusInput from './components/refs_with _Class _Components/FocusInput';
import FRParentInput from './components/forwarding _Refs/FRParentInput'
import HeaderM from './components/header/Header'
import Home from './components/home/Home'
import PortalDemo from './components/portals/PortalDemo'
import Hero from './components/error_Boundary/Hero'
import ErrorBoundary from './components/error_Boundary/ErrorBoundary';

/* <Route path='/FRParentInput' component={FRParentInput} />

     
        <Welcome name="Toha" heroName="Jiraya" />
        <Welcome name="Jaspion" heroName="Jaspion" /> 
        <Welcome name="Tsuruji" heroName="Change Dragon" />    
        <Greet name="Clark" heroName="Superman">
          <p className="cor">This is childrem props</p>
        </Greet>
        <Greet name="Bruce" heroName="Batman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />
               
        <h2 className="error">Error</h2>
        <h2 className={styles.success}>Success</h2>
      
        <Stylesheet primary={false} />
        */

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderM/>

          <ErrorBoundary>
          <Hero heroName="Ana" />
          </ErrorBoundary>

          <ErrorBoundary>
          <Hero heroName="Mario" />
          </ErrorBoundary>
         
          <Route path='/' exact component={Home} />
          <Route path='/Form' component={Form} />
          <Route path='/EventBind' component={EventBind} />
          <Route path='/Welcome' component={Welcome} />
          <Route path='/LifecicleA' component={LifecicleA} />
          <Route path='/UserGreeting' component={UserGreeting} />
          <Route path='/ClassClick' component={ClassClick} />
          <Route path='/FunctionClick' component={FunctionClick} />
          <Route path='/FocusInput' component={FocusInput} />
          <Route path='/RefsDemo' component={RefsDemo} />
          <Route path='/ParentComp2' component={ParentComp2} />
          <Route path='/ParentComp' component={ParentComp} />
          <Route path='/Table' component={Table} />
          <Route path='/FragmentDemo' component={FragmentDemo} />
          <Route path='/Inline' component={Inline} />
          <Route path='/Stylesheet' component={Stylesheet} />
          <Route path='/IndexKey' component={IndexKey} />
          <Route path='/NameList' component={NameList} />
          <Route path='/ParentComponent' component={ParentComponent} />
          <Route path='/Counter' component={Counter} />
          <Route path='/Message' component={Message} />
          <Route path='/Hello' component={Hello} />
          <Route path='/PortalDemo' component={PortalDemo} />
          <Route path='/Hero' heroName="Ana" component={Hero} />                 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
