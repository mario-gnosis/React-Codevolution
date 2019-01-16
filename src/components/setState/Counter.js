import React, { Component } from 'react';

export class Counter extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
            count: 0
      }
    }
    increment() {
        /*
        this.setState({
            count: this.state.count + 1            
        }, () =>{
            console.log('Callback value: ', this.state.count)
        } 
        ) */
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))       
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div className="App">        
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
