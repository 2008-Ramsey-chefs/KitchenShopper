import React from 'react'
import {connect} from 'react-redux'

export class GuestCart extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {}
  render() {
    const products = Object.values(this.props.cart)
    if (this.props.cart) {
      return (
        <div className="cart-container">
          guest cart
          {products.map(product => (
            <div key={product.id}>
              <div> {product.itemName}</div>
              <div>{product.quantity}</div>
              <img src={product.imageUrl} />
              <div>{product.price}</div>
            </div>
          ))}
          <button>check out</button>
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

export default connect(mapState)(GuestCart)
