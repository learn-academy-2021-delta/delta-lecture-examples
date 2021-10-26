import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ip: ""
    }
  }

  getIP = () => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({ip: payload}))
  }

  render() {
    console.log(this.state.ip.ip)
    return (
      <>
        <h2>Get Your IP Address</h2>
        <button onClick={this.getIP}>Click Me!</button>
        <h4>{this.state.ip.ip}</h4>
        <h4>{this.state.ip.city}</h4>
        <h4>{this.state.ip.country_code}</h4>
        <h4>{this.state.ip}</h4>
      </>
    )
  }
}
export default App
