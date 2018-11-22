import { createStore } from 'redux';
import allReducers from '../reducers';
import { Provider } from 'react-redux';


const store = createStore(allReducers);
