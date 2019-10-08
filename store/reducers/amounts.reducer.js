import { ADD_AMOUNT, EDIT_AMOUNT, DELETE_AMOUNT } from '../actions';
import id from 'uuid/v4';

const initialState = [
  {
    value: null,
    id: id()
  }
];

const amounts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AMOUNT:
      return [
        ...state,
        action.payload
      ]
    case EDIT_AMOUNT:
      return state.map(item => {
        if(item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      })
    case DELETE_AMOUNT:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}

export default amounts