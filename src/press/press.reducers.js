import { ADD_PRESS } from './press.action';

const INITIAL_STATE = {
  press: []
};

export default (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case ADD_PRESS: {
      return {
        ...state,
        press: action.payload,
      };
    }
    default:
      return state;
  }
};
