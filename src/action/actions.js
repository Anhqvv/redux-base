import { INCREMENT, DECREMENT } from "../action/typeAction"

export const increaseCounter = () => {
  return {
    type: INCREMENT
  }
}

export const decreaseCounter = () => {
  return {
    type: DECREMENT
  }
}
