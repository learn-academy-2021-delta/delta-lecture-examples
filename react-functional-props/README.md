# React Functional Props

Setup
- make sure you are int he correct directory
- make a new branch
- $ yarn create react-app react-functional-props

Terrible Instacart App
- See things on the screen in a react class component
  - see some stores and items at each store
  ```
  <>
    <h1>Terrible Instacart</h1>
    <h3>Trader Joes</h3>
    <ul>
      <li>Peanut Butter</li>
      <li>Apples</li>
      <li>Cheese</li>
    </ul>
    <h3>Ralphs</h3>
    <ul>
      <li>Paper Towels</li>
      <li>Laudry Detergent</li>
      <li>Dish Soap</li>
    </ul>
  </>
  ```
- Adding a state object to manage the items
```
constructor(props){
  super(props)
  this.state = {
    traderJoes: ["Peanut Butter", "Apples", "Cheese", "Orange Juice"],
    ralphs: ["Paper Towels", "Laudry Detergent", "Dish Soap"]
  }
}

render() {
  console.log(this.state.traderJoes)
  console.log(this.state.ralphs)
  return (
    <>
      <h1>Terrible Instacart</h1>
      <h3>Trader Joes</h3>
      <ul>
        {this.state.traderJoes.map(value => {
          return <li>{value}</li>
        })}
      </ul>
      <h3>Ralphs</h3>
      <ul>
        {this.state.ralphs.map(value => {
          return <li>{value}</li>
        })}
      </ul>
    </>
  ```
- Code is getting repetitive, we need another component, props
  - Added another component - display component that just puts the UI on the screen of whatever lists should be displayed
```
import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.cartItem.map(value => {
            return <li>{value}</li>
          })}
        </ul>
      </>
    )
  }
}
export default List
```
- App is now passing the state arrays as props
```
import React, { Component } from 'react'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Apples", "Cheese", "Orange Juice"],
      ralphs: ["Paper Towels", "Laudry Detergent", "Dish Soap"]
    }
  }

  render() {
    console.log(this.state.traderJoes)
    console.log(this.state.ralphs)
    return (
      <>
        <h1>Terrible Instacart</h1>
        <h3>Trader Joes</h3>
        <List cartItem={this.state.traderJoes} />
        <h3>Ralphs</h3>
        <List cartItem={this.state.ralphs} />
      </>
    )
  }
}
export default App
```
