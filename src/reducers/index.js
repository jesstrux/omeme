import { combineReducers } from 'redux';
import ImagesReducer from './images';
import ImageReducer from './image';
import TabsReducer from './tabs';

const rootReducer = combineReducers({
  images: ImagesReducer,
  image: ImageReducer,
  tabs: TabsReducer
});

export default rootReducer;