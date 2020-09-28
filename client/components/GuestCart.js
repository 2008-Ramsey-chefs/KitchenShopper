import React from 'react'
import {connect} from 'react-redux'
import {addGuestCart, minusGuestCart} from '../store/guestCart'

export class GuestCart extends React.Component {
  constructor() {
    super()
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDeletion = this.handleDeletion.bind(this)
  }
  handleAdd(evt, product) {
    evt.preventDefault()
    this.props.addCart(product)
  }
  handleDeletion(evt, product) {
    evt.preventDefault()
    this.props.reduceCart(product)
  }
  render() {
    const products = Object.values(this.props.cart)
    if (this.props.cart) {
      return (
        <div id="cart-container">
          <h1>Shopping Cart</h1>
          {products.map(product => (
            <div key={product.id}>
              <div>NAME: {product.itemName}</div>
              <div>PRICE: ${product.price}</div>
              <button
                onClick={evt => this.handleAdd(evt, product)}
                type="submit"
                className="cart-button"
              >
                +
              </button>
              <span> {product.quantity} </span>
              <button
                onClick={evt => this.handleDeletion(evt, product)}
                type="submit"
                className="cart-button"
              >
                -
              </button>
            </div>
          ))}
          <button type="submit" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }
  }
}

const mapState = state => {
  return {
    cart: state.guestCart
  }
}

const mapDispatch = dispatch => {
  return {
    addCart: product => dispatch(addGuestCart(product)),
    reduceCart: product => dispatch(minusGuestCart(product))
  }
}

export default connect(mapState, mapDispatch)(GuestCart)