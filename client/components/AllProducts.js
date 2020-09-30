import React from 'react'
import {connect} from 'react-redux'
import './AllProducts.css'
import {fetchProducts} from '../store/products'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div id="body">
        <div id="product-container">
          {this.props.products.length === 0
            ? 'There are no products here!'
            : this.props.products.map(product => (
                <div key={product.id}>
                  <Link to={`/products/${product.id}`} key={product.id}>
                    <img src={product.imageUrl} />
                    <div id="name">NAME: {product.itemName}</div>
                    <div id="price">PRICE: ${product.price}</div>
                  </Link>
                </div>
              ))}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    getProducts: () => dispatch(fetchProducts())
  }
}

export default connect(mapState, mapDispatch)(AllProducts)
