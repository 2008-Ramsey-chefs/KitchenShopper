import axios from 'axios'

//initial state
const initialState = {}

//ACTION TYPE
const GET_GUEST_CART = 'GET_GUEST_CART'

//ACTION CREATOR
export const getGuestCart = guestCart => {
  return {
    type: GET_GUEST_CART,
    guestCart
  }
}

const guestCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GUEST_CART:
      const id = action.guestCart.id
      if (state[id]) {
        state[id].quantity++

        return state
      } else {
        action.guestCart.quantity = 1
        return {...state, [id]: action.guestCart}
      }
    default:
      return state
  }
}

export default guestCartReducer
