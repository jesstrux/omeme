import { VIEW_IMAGE, HIDE_IMAGE } from '../actions';

const initialState =  {
  data: null,
  showImage: false
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case VIEW_IMAGE:
      return {
        ...state,
        show: true,
        data: action.image
      };
    case HIDE_IMAGE:
      return {
        ...state,
        show: false,
        data: null
      };
    default:
      return state;
  }
}