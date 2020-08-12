import { createSlice } from '@reduxjs/toolkit';

import * as TodoAPIUtils from '../util/todoApiUtil';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    byId: {},
    allIds: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const { payload } = action;
      state.byId[payload.id] = payload;
      const idx = state.allIds.indexOf(payload.id);
      if (idx === -1) {
        state.allIds.push(payload.id);
      }
    },
    addTodos: (state, action) => {
      const { payload } = action;
      payload.map((todo) => {
        state.byId[todo.id] = todo;
        const idx = state.allIds.indexOf(todo.id);
        if (idx === -1) {
          state.allIds.push(todo.id);
        }
        return state;
      });
    },
    deleteTodo: (state, action) => {
      const { payload } = action;
      delete state.byId[payload.id];
      const idx = state.allIds.indexOf(payload.id);
      if (idx > -1) {
        state.allIds.splice(idx, 1);
      }
    },
    updateTodo: (state, action) => {
      const { payload } = action;
      state.byId[payload.id] = payload;
    },
  },
});

export const {
  addTodo,
  addTodos,
  deleteTodo,
  updateTodo,
} = todoSlice.actions;

// export const fetchTodos = () => (dispatch) => (
//   TodoAPIUtils.fetchTodos()
//     .then((todos) => {
//       dispatch(addTodos(todos));
//     })
// );

export const fetchTodos = () => (dispatch) => (
  TodoAPIUtils.fetchTodos().then((todos) => dispatch(addTodos(todos)))
);

export default todoSlice.reducer;
