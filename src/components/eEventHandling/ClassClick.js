import React, { Component } from 'react'

export class ClassClick extends Component {
  clickHandler(){
    console.log("Clicked the button")
  }
  render() {
    return (
      <div className="App">
         <h4>Exemplo de click com Class (console)</h4>
          <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
