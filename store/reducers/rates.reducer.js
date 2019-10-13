import { FETCH_RATES } from '../actions';

const rates = (state = {}, action) => {
  switch (action.type) {
    case FETCH_RATES:
      return action.payload.data
    default:
      return state
  }
}

export default rates;