import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         Username: '',
         comments: '',
         topic: 'react'
      }
    }
    handlerUsernameChange = (event) =>{
        this.setState({
            Username: event.target.value
        })
    }

    handlerCommentsChange = event =>{
        this.setState({
            comments: event.target.value
        })
    }

    handlerTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }
    handlerSubmit = event => {
        alert(`${this.state.Username} - ${this.state.comments} - ${this.state.topic}`)
        event.preventDefault()
    }

  render() {

    const {Username, comments, topic} = this.state

    return (
      <form onSubmit={this.handlerSubmit} className="App">
          <div className="space">
              <label>Username</label>
              <input type='text' value={Username}  onChange={this.handlerUsernameChange}/>
          </div>
          <div className="space">
              <label>Comments</label>
              <textarea value={comments} onChange={this.handlerCommentsChange}></textarea>
          </div>
          <div className="space">
              <label>Topic</label>
              <select value={topic} onChange={this.handlerTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>                
              </select>
          </div>
          <button type="submit" className="space">Submit</button>
      </form>
    )
  }
}

export default Form
