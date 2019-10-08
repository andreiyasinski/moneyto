import id from 'uuid/v4';

export const ADD_AMOUNT = 'ADD_AMOUNT';
export const DELETE_AMOUNT = 'DELETE_AMOUNT';
export const EDIT_AMOUNT = 'EDIT_AMOUNT';

export const addAmount = () => {
  return {
    type: ADD_AMOUNT,
    payload: {
      value: null,
      id: id()
    }
  }
}

export const deleteAmount = (id) => {
  return {
    type: DELETE_AMOUNT,
    payload: {
      id
    }
  }
}

export const editAmount = (id, value) => {
  return {
    type: EDIT_AMOUNT,
    payload: {
      id,
      value
    }
  }
}