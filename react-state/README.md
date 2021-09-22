# React State


### Initial Build Out

```JavaScript
import React, { Component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      miles: 0
    }
  }

  addMile = () => {
    // setState is like return, there should only be one and when we hit it, the function is done
    this.setState({miles: this.state.miles + 1})
  }

  render(){
    console.log(this.state.miles)
    return(
      <>
        <h1>Running App</h1>
        <p>Miles: {this.state.miles}</p>
        <button onClick={this.addMile}>Add a mile</button>
      </>
    )
  }
}

export default App
```
