import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      userInput: ""
    }
  }
  handleChange = (e) => {
    console.log(e);
    this.setState({userInput: e.target.value})
  }
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <input type="text"
               value={this.state.userInput}
               onChange={this.handleChange}
         />
        <h1>
        {this.state.userInput.split("").map((value) => {

          if(value === "e") {
            return "3"
          }
          
          else {
            return value
          }
          
        })}
        </h1>
        
      
          
        
      </>
    )
  }
}

