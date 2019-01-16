import React, { Component } from 'react'

export class RegComp extends Component {
  render() {

    console.log("Reg Component render")
    return (
      <div className="App">
       <h3>Regular Component</h3> 
       {this.props.name}
      </div>
    )
  }
}

export default RegComp
