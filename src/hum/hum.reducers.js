import { ADD_HUM } from './hum.action';

const INITIAL_STATE = {
  hum: []
};

export default (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case ADD_HUM: {
      return {
        ...state,
        hum: action.payload,
      };
    }
    default:
      return state;
  }
};
