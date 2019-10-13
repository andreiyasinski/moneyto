import { combineReducers } from 'redux';
import amounts from './amounts.reducer';
import rates from './rates.reducer';
import base from './base.reducer';

const moneyToApp = combineReducers({
  amounts,
  rates,
  base
})

export default moneyToApp;