import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct, addProduct} from '../store/singleProduct'
import {addGuestCart} from '../store/guestCart'

export class SingleProduct extends React.Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.getSingleProduct(id)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.guestHandleSubmit = this.guestHandleSubmit.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addProduct(this.props.product.id)
  }
  guestHandleSubmit(evt) {
    evt.preventDefault()
    this.props.addGuestCart(this.props.product)
  }
  render() {
    const product = this.props.product
    if (!product) {
      return <div>The product you're looking for does not exist</div>
      // this if a user is logged in.
    } else if (this.props.user.id) {
      return (
        <div key={product.id}>
          <img src={product.imageUrl} />
          <div>NAME: {product.itemName}</div>
          <div>PRICE: ${product.price}</div>
          <div>DESCRIPTION: {product.description}</div>
          <button onClick={this.handleSubmit}>Add to Cart</button>
        </div>
      )
    } else {
      //this is if they are a guest.
      return (
        <div key={product.id}>
          <img src={product.imageUrl} />
          <div>NAME: {product.itemName}</div>
          <div>PRICE: ${product.price}</div>
          <div>DESCRIPTION: {product.description}</div>
          <button onClick={this.guestHandleSubmit}>Add to Cart</button>
        </div>
      )
    }
  }
}
const mapState = state => {
  return {
    product: state.product,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addProduct: id => dispatch(addProduct(id)),
    addGuestCart: product => dispatch(addGuestCart(product))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
