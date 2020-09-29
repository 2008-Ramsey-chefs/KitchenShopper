import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {updateOrder} from '../store/cart'
import {Link} from 'react-router-dom'

export class BillingPage extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    if (this.props.isLoggedIn) {
      this.props.updateOrder()
    } else {
      window.location.reload()
    }
  }
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.getCart()
    }
  }

  render() {
    let totalPrice
    //if user is logged in, products get assigned accordingly
    if (this.props.isLoggedIn) {
      //logged in user
      const cart = this.props.cart
      if (cart.products === undefined) cart.products = []
      totalPrice = cart.products.reduce(
        (acc, product) =>
          acc + product['order-product'].quantity * product.price,
        0
      )
    } else {
      //guest
      let products = Object.values(this.props.guestCart)
      totalPrice = products.reduce(
        (acc, product) => acc + product.quantity * product.price,
        0
      )
    }

    return (
      <div>
        <div> Thank you for shopping with us!</div>
        <div>Your order total is ${totalPrice}</div>
        <button onClick={evt => this.handleSubmit(evt)} type="submit">
          <Link to="/products">Confirm Order</Link>
        </button>
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart,
    guestCart: state.guestCart
  }
}
const mapDispatch = dispatch => {
  return {
    getCart: () => dispatch(fetchCart()),
    updateOrder: () => dispatch(updateOrder())
  }
}
export default connect(mapState, mapDispatch)(BillingPage)
