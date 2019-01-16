import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props){
        super(props)
        this.state= {
            message: "Olá"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    

    clickHandler(){
        this.setState({
        message: "GoodBye!"
     })         
    }
    
    clickHandler3(){
        this.setState({
        message: "GoodBye!"
     })         
    }

    clickHandler4 = () =>{
        this.setState({
            message: "4 exemplo com => "
        })
    }
    

  render() {
    return (
      <div className="App">
         <h4>Exemplo de click com Event Bind (console)</h4>
         <div>{this.state.message}</div>
          <button onClick={this.clickHandler.bind(this)}>Click Bind</button>
          <button onClick={() =>this.clickHandler()}>Click com => Function</button>
          <button onClick={this.clickHandler3}>Click com bind(this)</button>
          <button onClick={this.clickHandler4}>Click 4 com => Function </button>
      </div>
    )
  }
}

export default EventBind
