import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuotationReducer from './QuotationReducer';
import PurchaseReducer from './PurchaseReducer';

export default combineReducers({
  PurchaseReducer,
  QuotationReducer,
  form: formReducer
})