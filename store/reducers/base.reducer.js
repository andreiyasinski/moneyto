import { EDIT_BASE } from '../actions';

const base = (state = 'USD', action) => {
  switch (action.type) {
    case EDIT_BASE:
      return action.payload.currency
    default:
      return state
  }
}

export default base;