import { createStore, combineReducers, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import recordReducer from './reducers/recordReducer';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  records: recordReducer
})

const store = createStore(
  reducer, 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
