import { combineReducers } from 'redux';
import AuthReducer from './auth';
import ImagesReducer from './images';
import ImageReducer from './image';
import TabsReducer from './tabs';

import { routerReducer } from 'react-router-redux';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  images: ImagesReducer,
  image: ImageReducer,
  tabs: TabsReducer,
  router: routerReducer
});

export default rootReducer;