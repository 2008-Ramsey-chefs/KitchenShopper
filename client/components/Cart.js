import React from 'react'
import {connect} from 'react-redux'
import {fetchCart, addQuantity} from '../store/cart'
import {fetchProducts} from '../store/products'

export class Cart extends React.Component {
  constructor() {
    super()
    this.handleAddition = this.handleAddition.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
  }

  handleAddition(evt, id) {
    evt.preventDefault()
    this.props.addQuantity(id)
  }

  render() {
    const cart = this.props.cart

    return (
      <div>
        <h1>YOUR CART</h1>
        <div id="cart-container">
          {cart.length === 0
            ? 'There are no items in your cart'
            : cart.products.map(product => (
                <div key={product.id}>
                  <div>NAME: {product.itemName}</div>
                  <div>QUANTITY: {product['order-product'].quantity}</div>
                  <div>PRICE: ${product.price}</div>
                  <button
                    onClick={evt => this.handleAddition(evt, product.id)}
                    type="submit"
                    className="cart-button"
                  >
                    +
                  </button>
                  <button type="submit" className="cart-button">
                    -
                  </button>
                </div>
              ))}
          <button type="submit">Checkout</button>
        </div>
      </div>
    )
  }
}
const mapState = state => {
  return {
    cart: state.cart
  }
}
const mapDispatch = dispatch => {
  return {
    getCart: () => dispatch(fetchCart()),
    addQuantity: id => dispatch(addQuantity(id))
  }
}
export default connect(mapState, mapDispatch)(Cart)
