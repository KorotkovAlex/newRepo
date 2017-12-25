import { ADD_PARAMS_IN_HOME } from './home.action';

const INITIAL_STATE = {
  temp: '',
  press: '',
  hum: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case ADD_PARAMS_IN_HOME: {
      return {
        ...state,
        temp: action.payload.temp,
        press: action.payload.press,
        hum: action.payload.hum
      };
    }
    default:
      return state;
  }
};
