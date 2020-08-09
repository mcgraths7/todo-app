import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/errorActions';

const errorReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return [...action.errors];
    case CLEAR_ERRORS:
      return [];
    default:
      return [];
  }
};

export default errorReducer;
