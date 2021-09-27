import React, { Component } from 'react'
import FlashCard from './components/FlashCard'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      animalsArray : ["Pandas","Ligers","Black Panthers", "cheetah", "Spider", "Kookaburra", "Wolf", "manBearPig", "Giraffe"],
      randimal: 0
    }
  }
handleClick = () => {
  //finding the length of the array
  let length = this.state.animalsArray.length
  // creating a random number that uses the lengbth of the array for use later
  let randomNum = Math.floor(Math.random() * length)
  // saves the number in state by overwriting the key:value pair randimal
  this.setState({randimal: randomNum})
}


  render() {
    return (
      <>
       {/* {this.state.animalsArray.map(value=>{
         return <FlashCard superman={value}/>
       })} */}
       
        <FlashCard 
          superman={this.state.animalsArray[this.state.randimal]} 
          click={this.handleClick}
        />
      </>
    )
  }
}
