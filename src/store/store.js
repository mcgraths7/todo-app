import { configureStore } from '@reduxjs/toolkit';

import todoReducer from '../reducers/todoSlice';
import stepReducer from '../reducers/stepSlice';

const store = configureStore({
  reducer: {
    todos: todoReducer,
    steps: stepReducer,
  },
});

export default store;
