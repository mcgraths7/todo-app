import { RECEIVE_STEP, RECEIVE_STEPS, TOGGLE_STEP, REMOVE_STEP } from '../actions/stepActions';

const _initialState = {
  steps: {
    1: {
      id: 1,
      todoId: 1,
      title: "get sponge",
      isDone: false
    },
    2: {
      id: 2,
      todoId: 1,
      title: "get bucket",
      isDone: false
    },
    3: {
      id: 3,
      todoId: 1,
      title: "fill bucket with soapy water",
      isDone: false
    },
    4: {
      id: 4,
      todoId: 1,
      title: "begin washing",
      isDone: false
    }
  }
};

const stepReducer = (previousState = _initialState.steps, action) => {
  Object.freeze(previousState);
  let newState = Object.assign({}, previousState);

  let stepItem = action.step;
  let stepHash = {};

  switch (action.type) {
    case RECEIVE_STEP:
      stepHash[stepItem["id"]] = stepItem;
      return Object.assign({}, newState, stepHash)
    case RECEIVE_STEPS:
      let stepsHash = {}
      action.steps.map( step => stepsHash[step.id] = step);
      return Object.assign(newState, todosHash);
    case TOGGLE_STEP:
      stepItem.isDone = !stepItem.isDone;
      stepHash[stepItem.id] - stepItem;
      return Object.assign({}, newState, stepHash);
    case REMOVE_STEP:
      delete newState[stepItem.id];
      return newState;
    default:
      return previousState;
  }
}

export default stepReducer;