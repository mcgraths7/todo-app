import {
  RECEIVE_STEP,
  REMOVE_STEP,
  RECEIVE_STEPS,
} from '../actions/stepActions';

const stepReducer = (initialState = {}, action) => {
  Object.freeze(initialState);
  const { step, steps, type } = action;
  const newState = Object.assign({}, initialState);

  let stepItem;
  let stepItems;
  if (action.step) {
    stepItem = Object.assign({}, step);
  }
  if (action.steps) {
    stepItems = [...steps];
  }

  switch (type) {
    case RECEIVE_STEP:
      newState[stepItem.id] = stepItem;
      return newState;
    case RECEIVE_STEPS:
      stepItems.forEach((step) => {
        newState[step.id] = step;
      });
      return newState;
    case REMOVE_STEP:
      delete newState[stepItem.id];
      return newState;
    default:
      return initialState;
  }
};

export default stepReducer;
