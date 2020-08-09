import {
  RECEIVE_STEP,
  REMOVE_STEP,
} from '../actions/stepActions';

const stepReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  const newState = { ...initialState };

  const stepItem = action.step;

  switch (action.type) {
    case RECEIVE_STEP:
      newState[stepItem.id] = stepItem;
      return newState;
    case REMOVE_STEP:
      delete newState[stepItem.id];
      return newState;
    default:
      return initialState;
  }
};

export default stepReducer;
