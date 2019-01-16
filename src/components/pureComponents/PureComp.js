import React, {PureComponent} from 'react'

class PureComp extends PureComponent{

    render(){
        console.log("Pure Component render")
        return(
            <div className="App">
               <h3>Pure Component</h3> 
               {this.props.name}
            </div>
           
        )
    }
}

export default PureComp