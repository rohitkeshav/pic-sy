import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const store = createStore(allReducers, 
    applyMiddleware(thunk)
  );
