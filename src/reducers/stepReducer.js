import {
  RECEIVE_STEP,
  RECEIVE_STEPS,
  TOGGLE_STEP,
  REMOVE_STEP,
} from '../actions/stepActions';

const initialState = {
  steps: {
    1: {
      id: 1,
      todoId: 1,
      title: 'get sponge',
      isDone: false,
    },
    2: {
      id: 2,
      todoId: 1,
      title: 'get bucket',
      isDone: false,
    },
    3: {
      id: 3,
      todoId: 1,
      title: 'fill bucket with soapy water',
      isDone: false,
    },
    4: {
      id: 4,
      todoId: 1,
      title: 'begin washing',
      isDone: false,
    },
  },
};

const stepReducer = (previousState = initialState.steps, action) => {
  Object.freeze(previousState);
  const newState = { ...previousState };

  const stepItem = action.step;
  const stepHash = {};
  switch (action.type) {
    case RECEIVE_STEP:
      stepHash[stepItem.id] = stepItem;
      return { ...newState, stepHash };
    case RECEIVE_STEPS:
      action.steps.forEach((step) => {
        newState[step.id] = step;
      });
      return newState;
    case TOGGLE_STEP:
      stepItem.isDone = !stepItem.isDone;
      stepHash[stepItem.id] = stepItem;
      return { ...newState, stepHash };
    case REMOVE_STEP:
      delete newState[stepItem.id];
      return newState;
    default:
      return previousState;
  }
};

export default stepReducer;
