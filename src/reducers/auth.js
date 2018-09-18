import { SIGN_USER_IN, SIGN_USER_OUT } from '../actions';
import { currentUser, setUser, unsetUser } from './current_user'

const db_user = currentUser();
const initialState =  {
  status: db_user && db_user.username !== undefined,
  user: db_user
};

console.log(db_user);

export default function modal(state = initialState, action) {
  switch(action.type) {
    case SIGN_USER_IN:
      setUser(action.user)
      return {
        ...state,
        status: true,
        user: action.user
      };
    case SIGN_USER_OUT:
      unsetUser();
      return {
        ...state,
        status: false,
        user: null
      };
    default:
      return state;
  }
}