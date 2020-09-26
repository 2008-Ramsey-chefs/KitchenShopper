import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct, addProduct} from '../store/singleProduct'

export class SingleProduct extends React.Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.getSingleProduct(id)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addProduct(this.props.product.id)
  }
  render() {
    const product = this.props.product
    if (!product) {
      return <div>The product you're looking for does not exist</div>
    }
    return (
      <div key={product.id}>
        <img src={product.imageUrl} />
        <div>NAME: {product.itemName}</div>
        <div>PRICE: ${product.price}</div>
        <div>DESCRIPTION: {product.description}</div>
        <button onClick={this.handleSubmit}>Add to Cart</button>
      </div>
    )
  }
}
const mapState = state => {
  return {
    product: state.product
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id)),
    addProduct: id => dispatch(addProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
