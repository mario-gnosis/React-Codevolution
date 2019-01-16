import React, { Component } from 'react'
import LifecicleB from './LifecicleB';

class LifecicleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Mário'
      }
      console.log('LifecicleA constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifecicleA getDerivedStateFromProps')
        return null 
    }
    componentDidMount(){
        console.log('LifecicleA componentDidMount ')
    }
    shouldComponentUpdate(){
        console.log('Lifecicle B shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecicle B getSnapshotBeforeUpdate')
        return null
    }

   componentDidUpdate(){
    console.log('Lifecicle B componentDidUpdate')
   } 


    changeState = () =>{
        this.setState({
            name: 'Codevolution'
        })
    }
  
  render() {
    console.log('LifecicleA render')
    return (        
      <div className="App">
       <p>Lifecicle A {this.state.name}</p> 
        <button onClick={this.changeState}>Change state</button>
        <LifecicleB/>
      </div>
    )
  }
}

export default LifecicleA
