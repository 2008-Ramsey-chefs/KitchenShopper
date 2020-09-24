import React from 'react'
import {connect} from 'react-redux'
import {fetchProducts} from '../store/products'

/**
 * COMPONENT
 */
export class AllProducts extends React.Component {
  // constructor() {
  //     super()
  // }
  componentDidMount() {
    console.log('hey im in render', this.props.products)

    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <h1>BOB PASTA STORE</h1>
        <div id="product-container">
          {this.props.products.length === 0
            ? 'There are no products here!'
            : this.props.products.map(product => (
                <div key={product.id}>
                  <img src={product.imageUrl} />
                  <div>NAME: {product.itemName}</div>
                  <div>PRICE: ${product.price}</div>
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
