import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import works from './works';

export default combineReducers({
	routing: routerReducer,
	works,
});
