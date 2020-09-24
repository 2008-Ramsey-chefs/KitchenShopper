import axios from 'axios'
import history from '../history'

//INITIAL STATE
const initialState = []

//ACTION TYPES
const GET_PRODUCTS = 'GET_PRODUCTS'

//ACTION CREATOR
const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

//THUNK CREATOR for GET
export const fetchProducts = () => {
  return async dispatch => {
    try {
      const {data: products} = await axios.get('/api/products')
      console.log('inside think')
      dispatch(getProducts(products))
    } catch (error) {
      console.log(error)
    }
  }
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}

export default productsReducer
