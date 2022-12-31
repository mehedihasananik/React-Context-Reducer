import { actionTypes } from "./actionTypes"

export const initiaState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  term: false
}

export const reducer = (state, action) => {

  if (action.type === actionTypes.INPUT) {
    return {
      ...state,
      [action.payload.name]: action.payload.value
    }
  }
  if (action.type === actionTypes.TOGGLE) {
    return {
      ...state,
      term: !state.term
    }
  }
  if (action.type === actionTypes.INCREMENT) {
    return {
      ...state,
      quantity: state.quantity + action.payload.count
    }
  }
  else if (action.type === actionTypes.DECREMENT) {
    return {
      ...state,
      quantity: state.quantity - action.payload.count
    }
  }
}