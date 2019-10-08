import id from 'uuid/v4';

export const ADD_AMOUNT = 'ADD_AMOUNT';
export const DELETE_AMOUNT = 'DELETE_AMOUNT';

export const addAmount = (record) => {
  return {
    type: ADD_AMOUNT,
    payload: {
      
    }
  }
}

export const deleteAmount = (id) => {
  return {
    type: DELETE_AMOUNT,
    payload: {
      
    }
  }
}