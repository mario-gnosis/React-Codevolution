import React, { Component } from 'react';
import ChildComponent from './ChildComponent'


 class ParentComponent extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      parentName: 'Parent'
   }
    this.greetParent = this.greetParent.bind(this)
 } 
    greetParent(childName){
        alert(`Olá ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div className="App">
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent