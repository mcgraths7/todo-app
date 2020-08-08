import {
  RECEIVE_STEP,
  REMOVE_STEP,
} from '../actions/stepActions';

const stepReducer = (previousState = {}, action) => {
  Object.freeze(previousState);
  const newState = { ...previousState };

  const stepItem = action.step;

  switch (action.type) {
    case RECEIVE_STEP:
      newState[stepItem.id] = stepItem;
      return newState;
    case REMOVE_STEP:
      delete newState[stepItem.id];
      return newState;
    default:
      return previousState;
  }
};

export default stepReducer;
