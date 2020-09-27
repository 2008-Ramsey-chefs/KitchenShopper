import axios from 'axios'
//INTIAL STATE
const initialState = []

//ACTION TYPE
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'

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
      console.log('cartReducer----->', action.cart)
      return action.cart
    // case ADD_TO_CART: {
    //     //cart.products.filter (product.id=== action.id) product['order-product'].quantity +1
    //     let newProduct = state.cart.products.filter(product => product.id===action.id)
    //     newProduct[0]['order-product'].quantity += 1
    //     //let otherProducts = state.cart.products.filter(product => product.id!==action.id)
    //     //[...state, ]
    //   return
    // }
    default:
      return state
  }
}
export default cartReducer
