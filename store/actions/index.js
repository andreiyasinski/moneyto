import id from 'uuid/v4';

export const ADD_AMOUNT = 'ADD_AMOUNT';
export const DELETE_AMOUNT = 'DELETE_AMOUNT';
export const EDIT_AMOUNT = 'EDIT_AMOUNT';
export const FETCH_RATES = 'FETCH_RATES';
export const EDIT_BASE = 'EDIT_BASE';

export const addAmount = () => {
  return {
    type: ADD_AMOUNT,
    payload: {
      value: null,
      id: id(),
      currency: 'USD'
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

export const editAmount = (id, value, currency) => {
  return {
    type: EDIT_AMOUNT,
    payload: {
      id,
      value,
      currency
    }
  }
}

export const editBase = (currency) => {
  return {
    type: EDIT_BASE,
    payload: {
      currency
    }
  }
}

export const fetchRates = (data) => {
  return {
    type: FETCH_RATES,
    payload: {
      data
    }
  }
};

export const fetchData = () => {
  return (dispatch) => {
    return fetch('https://api.ratesapi.io/api/latest?base=USD')
      .then((response) => response)
      .then((response) => response.json())
      .then(myJson => {
        // console.log(myJson.rates)
        dispatch(fetchRates(myJson.rates))
      })
      .catch((error) => console.log(error))
  };
};