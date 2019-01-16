import React, { Component } from 'react'
import MemoComp from './MemoComp';

export class ParentComp2 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ana'
      }
    }
    
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: 'Pavani'
            })
        }, 2000)
    }

  render() {

    console.log('**************Parent Component***************')
    return (
      <div className="App">
        <h2>Parent Component 2</h2>  
       <MemoComp  name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp2
