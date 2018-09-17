import { combineReducers } from 'redux';
import ImagesReducer from './images';

const rootReducer = combineReducers({
  images: ImagesReducer
});

export default rootReducer;