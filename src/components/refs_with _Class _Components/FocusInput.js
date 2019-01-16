import React, { Component } from 'react'

class FocusInput extends Component {

    constructor(props) {
        super(props)

        this.ComponentRef = React.createRef()
    }
    clickHandler = () => {
        this.ComponentRef.current.FocusInput()
    }
    render() {
        return (
            <div className="App">
                <input ref={this.ComponentRef}/>
                <button onClick={this.clickHandler}>Focus input</button>
            </div>
        )
    }
}

export default FocusInput
