import * as StepAPIUtil from '../util/stepAPIUtil';
import { receiveErrors, clearErrors } from './errorActions';

export const RECEIVE_STEP = 'RECEIVE_STEP';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const REMOVE_STEP = 'REMOVE_STEP';

// Synchronoous Actions
export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  step,
});

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps,
});

export const removeStep = (step) => ({
  type: REMOVE_STEP,
  step,
});

// Asynchronous Actions
export const fetchSteps = (todo) => (dispatch) => (
  StepAPIUtil.fetchSteps(todo).then((steps) => dispatch(receiveSteps(steps)))
);

export const createStep = (todo, step) => (dispatch) => (
  StepAPIUtil.createStep(todo, step)
    .then((step) => {
      dispatch(receiveStep(step));
      dispatch(clearErrors());
    },
    (err) => dispatch(receiveErrors(err.responseJSON)))
);

export const destroyStep = (todo, step) => (dispatch) => (
  StepAPIUtil.destroyStep(todo, step)
    .then((step) => dispatch(removeStep(step)))
);
