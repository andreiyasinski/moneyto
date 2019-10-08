// import {  } from '../actions';
import id from 'uuid/v4';

const initialState = [
  {
    value: null,
    id: id()
  }
];

const amounts = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default amounts