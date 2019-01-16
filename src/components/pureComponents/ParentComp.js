import React, { PureComponent } from 'react'
import RegComp from './RegComp';
import PureComp from './PureComp';

export class ParentComp extends PureComponent {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Mário'
      }
    }
    
    componentDidMount(){
        setInterval(() =>{
            this.setState({
                name: 'Lima'
            })
        }, 2000)
    }

  render() {

    console.log('**************Parent Component***************')
    return (
      <div className="App">
        <h2>Parent Component</h2>  
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
