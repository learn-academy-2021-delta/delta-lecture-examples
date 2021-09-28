import React, { Component } from 'react'
import List from './components/List'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      traderJoes: ["Peanut Butter", "Apples", "Cheese", "Orange Juice"],
      ralphs: ["Paper Towels", "Laudry Detergent", "Dish Soap"],
      cart: []
    }
  }

  addItem = (item) => {
    this.setState({cart: [...this.state.cart, item]})
  }

  render() {
    console.log(this.state.traderJoes)
    console.log(this.state.ralphs)
    return (
      <>
        <h1>Terrible Instacart</h1>

        <h3>Trader Joes</h3>
        <List
          cartItem={this.state.traderJoes}
          addItem={this.addItem}
        />

        <h3>Ralphs</h3>
        <List
          cartItem={this.state.ralphs}
          addItem={this.addItem}
        />

        <h3>Cart Items</h3>
        <ul>
          {this.state.cart.map((value, index) => {
            return <li key={index}>{value}</li>
          })}
        </ul>
      </>
    )
  }
}
export default App
