import { SET_USERNAME } from '../constant'

export default function countReducer(preState = '', action) {
  const { type, data } = action
  switch (type) {
    case SET_USERNAME:
      return data
    default:
      return preState
  }
}