import { combineReducers } from 'redux';
import amounts from './amounts.reducer';

const moneyToApp = combineReducers({
  amounts,
})

export default moneyToApp;