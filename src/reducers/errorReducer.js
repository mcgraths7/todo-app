import {
  RECEIVE_ERROR,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
} from '../actions/errorActions';

const errorReducer = (initialState = [], action) => {
  Object.freeze(initialState);
  const { error, errors, type } = action;
  const newState = [...initialState];
  switch (type) {
    case RECEIVE_ERROR:
      newState.push(error);
      return newState;
    case RECEIVE_ERRORS:
      newState.push(errors);
      return newState.flat();
    case CLEAR_ERRORS:
      return [];
    default:
      return [];
  }
};

export default errorReducer;
