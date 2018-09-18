import { SWITCH_TABS } from '../actions';

const initialState =  {
  selected: 0
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case SWITCH_TABS:
      return {
        ...state,
        selected: action.tab
      };
    default:
      return state;
  }
}