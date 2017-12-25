import { ADD_GAS } from './gas.action';

const INITIAL_STATE = {
  gas: []
};

export default (state = INITIAL_STATE, action) => {
  console.log('initState gas', state);
  switch (action.type) {
    case ADD_GAS: {
      return {
        ...state,
        gas: action.payload
      };
    }
    default:
      return state;
  }
};
