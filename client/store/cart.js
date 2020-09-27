import axios from 'axios'
//INTIAL STATE
const initialState = []

//ACTION TYPE
const GET_CART = 'GET_CART'

//ACTION CREATOR
export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  }
}

//THUNK
export const fetchCart = () => {
  return async dispatch => {
    try {
      const {data: cart} = await axios.get('/api/orders/cart')
      dispatch(getCart(cart))
    } catch (error) {
      console.log(error)
    }
  }
}

export const removeQuantity = id => {
  return async dispatch => {
    try {
      const {data: updatedCart} = await axios.put(`/api/orders/${id}/decrement`)
      dispatch(getCart(updatedCart))
    } catch (error) {
      console.log(error)
    }
  }
}

export const addQuantity = id => {
  return async dispatch => {
    try {
      const {data: updatedCart} = await axios.put(`/api/orders/${id}`)
      dispatch(getCart(updatedCart))
    } catch (error) {
      console.log(error)
    }
  }
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART:
      return action.cart
    default:
      return state
  }
}
export default cartReducer
