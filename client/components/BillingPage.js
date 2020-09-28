import React from 'react'
import {connect} from 'react-redux'
import {fetchCart} from '../store/cart'
import {updateOrder} from '../store/cart'

export class BillingPage extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.updateOrder()
  }
  componentDidMount() {
    if (this.props.isLoggedIn) this.props.getCart()
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
        <form>
          <div>
            <label htmlFor="name">
              <small>Name</small>
            </label>
            <input name="name" type="text" />
          </div>
          <div>
            <label htmlFor="address">
              <small>Address</small>
            </label>
            <input name="address" type="text" />
          </div>
          <button onClick={evt => this.handleSubmit(evt)} type="submit">
            Confirm Order
          </button>
        </form>
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
