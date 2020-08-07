import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import stepReducer from './stepReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  steps: stepReducer
});

export default rootReducer;