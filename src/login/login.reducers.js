import { ADD_MAC_ADDRES } from './login.action';

const INITIAL_STATE = {
  macAddres: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case ADD_MAC_ADDRES: {
      return {
        ...state,
        macAddres: action.payload,
      };
    }
    default:
      return state;
  }
};
