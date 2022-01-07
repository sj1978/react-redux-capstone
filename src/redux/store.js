import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './Home/reducer/Reducer';


const reducer = combineReducers({
    countriesReducer,
    
  });
  

  const store = createStore(
    reducer,
    applyMiddleware(logger, thunk),
  );
  
  export default store;