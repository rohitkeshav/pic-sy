import { combineReducers } from 'redux';
import userReducers from './reducer-users';
import imageReducers from './reducer-images';
import categoriesReducers from './reducer-categories';


const allReducers = combineReducers({
    users: userReducers,
    allImages: imageReducers,
    categoryImages: categoriesReducers
});

export default allReducers;
