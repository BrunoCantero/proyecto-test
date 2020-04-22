import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import example from './example/example';

const State = combineReducers({
  example,
  form: formReducer,
});

export default State;
