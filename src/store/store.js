import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';

const today = new Date();
const initialState = {
  todos: {
    1: {
      id: 1,
      title: 'wash car',
      body: 'with soap',
      completeBy: today.toLocaleDateString(),
      isDone: false,
    },
    2: {
      id: 2,
      title: 'wash dog',
      body: 'with shampoo',
      completeBy: today.toLocaleDateString(),
      isDone: true,
    },
  },
  steps: {
    1: {
      id: 1,
      title: 'get bucket',
      todoId: 1,
    },
    2: {
      id: 2,
      title: 'get sponge',
      todoId: 1,
    },
    3: {
      id: 3,
      title: 'get washin',
      todoId: 1,
    },
    4: {
      id: 4,
      title: 'fill tub',
      todoId: 2,
    },
    5: {
      id: 5,
      title: 'get dog',
      todoId: 2,
    },
    6: {
      id: 6,
      title: 'get washin',
      todoId: 2,
    },
  },
};

const configureStore = (preloadedState = initialState) => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(logger),
  )
);

export default configureStore;
