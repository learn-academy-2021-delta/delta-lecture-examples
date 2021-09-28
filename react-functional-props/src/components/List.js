import React, { Component } from 'react'

class List extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.cartItem.map((value, index) => {
            return (
              <li key={index}>
                <button onClick={() => this.props.addItem(value)}>
                  {value}
                </button>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}
export default List
