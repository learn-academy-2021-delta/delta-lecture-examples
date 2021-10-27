import React, { Component } from 'react'
// import nasaData from './mockNasa.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasa: "",
      pic: ""
    }
  }

  componentDidMount(){
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_MY_NASA_API_KEY}`)
    .then(response => response.json())
    .then(payload => this.setState({nasa: payload.photos}))
  }

  getPic = () => {
    let randomNum = Math.floor(Math.random() * this.state.nasa.length)
    this.setState({pic: this.state.nasa[randomNum].img_src})
  }

  render() {
    return (
      <>
        <h2>Mars Rover Photos</h2>
        <button onClick={this.getPic}>Get a random Mars pic</button>
        <br />
        {this.state.pic && <img src={this.state.pic} alt="random mars rover" width="200px"/>}
      </>
    )
  }
}
export default App
