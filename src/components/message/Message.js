import React, {Component} from 'react';

 class Message extends Component{

    constructor(){
        super();
        this.state={
            message: 'Welcome visitor'
        }
    }
    //Altera a mensagem Welcome visitor
    changeMessage(){
        this.setState({
            message: 'Thank you  for subscribing'
        })
    }
     render(){
         return (
            <div className="App">
                <h1>{this.state.message}</h1>
                <button onClick= {() => this.changeMessage()}>Subscribe</button>
            </div>
         ) 
     }
 }


export default Message
