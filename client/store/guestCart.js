//initial state
const initialState = {}

//ACTION TYPE
const INC_GUEST_CART = 'INC_GUEST_CART'

const DEC_GUEST_CART = 'DEC_GUEST_CART'

//ACTION CREATOR
export const addGuestCart = guestCart => {
  return {
    type: INC_GUEST_CART,
    guestCart
  }
}
export const minusGuestCart = guestCart => {
  return {
    type: DEC_GUEST_CART,
    guestCart
  }
}

const guestCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_GUEST_CART:
      const id = action.guestCart.id
      if (state[id]) {
        state[id].quantity++

        return {...state}
      } else {
        action.guestCart.quantity = 1
        return {...state, [id]: action.guestCart}
      }
    case DEC_GUEST_CART:
      const id2 = action.guestCart.id
      if (state[id2].quantity === 1) {
        delete state[id2]
        return {...state}
      }
      state[id2].quantity--
      return {...state}
    default:
      return state
  }
}

export default guestCartReducer
