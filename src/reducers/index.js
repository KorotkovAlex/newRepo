import { combineReducers } from 'redux';
import gasReducers  from '../gas';
import  homeReducers  from '../home';
import  loginReducers  from '../login';
import  tempReducers  from '../temp';
import  humReducers  from '../hum'
import  pressReducers  from '../press'





export default combineReducers({
  gasReducers,
  homeReducers,
  loginReducers,
  tempReducers,
  humReducers,
  pressReducers
});
