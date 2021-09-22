// src/components/Miles.js

import React, { Component } from 'react'

class Miles extends Component {
  constructor(props){
    super(props)
    this.state = {
      miles: 0,
      color: "purple"
    }
  }

  addMile = () => {
    // setState is like return, there should only be one and when we hit it, the function is done
    this.setState({miles: this.state.miles + 1})
  }

  render() {
    return (
      <>
        <p>Miles: {this.state.miles}</p>
        <button
          onClick={this.addMile}
          style={ {color: this.state.color} }
        >
          Add a mile
        </button>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div id="just-one-square"></div>
      </>
    )
  }
}
export default Miles
