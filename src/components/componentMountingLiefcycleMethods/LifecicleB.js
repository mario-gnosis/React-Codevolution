import React, { Component } from 'react'

class LifecicleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Mário'
      }
      console.log('LifecicleB constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('LifecicleB getDerivedStateFromProps')
        return null 
    }
    componentDidMount(){
        console.log('LifecicleB componentDidMount ')
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

  render() {
    console.log('LifecicleB render')
    return (        
      <div className="App">
        Lifecicle B
      </div>
    )
  }
}

export default LifecicleB
