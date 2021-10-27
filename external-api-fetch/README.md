# External APIs

Fetch - asynchronous action, make requests
Fetch returns a Promise
Promise - placeholder, can be in one of three states 1) pending, 2) fulfilled, 3) rejected

Hiding API keys: https://dev.to/thepuskar/how-to-hide-your-api-keys-in-react-4k55


```javascript
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
```
