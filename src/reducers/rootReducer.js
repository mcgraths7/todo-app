import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import stepReducer from './stepReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  todos: todoReducer,
  steps: stepReducer,
  errors: errorReducer,
});

export default rootReducer;
