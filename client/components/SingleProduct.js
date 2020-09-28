import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'

export class SingleProduct extends React.Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id)
    this.props.getSingleProduct(id)
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
    getSingleProduct: id => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(SingleProduct)
