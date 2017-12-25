import { ADD_TEMP } from './temp.action';

const INITIAL_STATE = {
  temp: []
};

export default (state = INITIAL_STATE, action) => {
  console.log('initState temp', state);
  switch (action.type) {
    case ADD_TEMP: {
      return {
        ...state,
        temp: action.payload
      };
    }
    default:
      return state;
  }
};
