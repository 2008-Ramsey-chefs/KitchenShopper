import React from 'react'
import {connect} from 'react-redux'

export class GuestCart extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {}
  render() {
    console.log('this is our cart ', this.props.cart)
    if (this.props.cart) {
      return (
        <div>
          guest cart
          {this.props.cart.map(product => (
            <div key={product.id}>
              <div>NAME: {product.itemName}</div>
              {/* <div>QUANTITY: {product['order-product'].quantity}</div> */}
              <div>PRICE: ${product.price}</div>
            </div>
          ))}
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
