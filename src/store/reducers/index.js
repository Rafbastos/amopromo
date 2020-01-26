import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import QuotationReducer from './QuotationReducer';

export default combineReducers({
    QuotationReducer,
    form: formReducer
})