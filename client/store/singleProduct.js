import axios from 'axios'

//INITIAL STATE
const initialState = {}

//ACTION TYPES
const GET_PRODUCT = 'GET_PRODUCT'

//ACTION CREATOR
const getProduct = product => {
  return {
    type: GET_PRODUCT,
    product
  }
}

//THUNK CREATOR for GET
export const fetchSingleProduct = id => {
  return async dispatch => {
    try {
      const {data: product} = await axios.get(`/api/products/${id}`)
      dispatch(getProduct(product))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addProduct = id => {
  return async dispatch => {
    try {
      const {data: product} = await axios.put(`/api/orders/${id}`)
    } catch (error) {
      console.error(error)
    }
  }
}

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product
    default:
      return state
  }
}

export default singleProductReducer
