import React, { Component } from 'react'

export class Order extends Component {
  render() {
    return (
      <div className='item'>
          <img src= {"./img/" + this.props.item.img} alt=""/>
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.price}$</p>
        <p className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)}>-</p>
      </div>
    )
  }
}

export default Order