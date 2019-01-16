import React, { Component } from 'react'

class UserGreeting extends Component {

constructor(props) {
  super(props)

  this.state = {
     isloggedIn: true
  }
}

  render() {

     // return this.state.isloggedIn && <div>Welcome Mário</div>

    return(
      this.state.isloggedIn  ? (<div className="App">Welcome Mário</div>) : (<div className="App">Welcome Ana</div>)
    )
   
    /*
    //Caso 3
    let message
    if(this.state.isloggedIn){
      message = <div>Welcome Mário</div>
    }else{
      message = <div>Welcome Ana</div>
    }
    return <div>{message}</div>
  */
    /*
    //Caso 2
    if(this.state.isloggedIn){
        return (<div>Welcome Mário</div>)
    }else{
      return (<div>Welcome Ana</div>)
    }

    */
    /*
    //Caso 1
    return (
      <div>
        <div>Welcome Mário</div>
        <div>Welcome Ana</div>
      </div>
    */
  }
}

export default UserGreeting
