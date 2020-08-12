import { createSlice } from '@reduxjs/toolkit';

import * as StepAPIUtils from '../util/stepAPIUtil';

export const stepSlice = createSlice({
  name: 'steps',
  initialState: {
    byId: {},
    allIds: [],
  },
  reducers: {
    addSteps: (state, action) => {
      const { payload } = action;
      payload.map((step) => {
        state.byId[step.id] = step;
        state.allIds.push(step.id);
        return state;
      });
    },
    addStep: (state, action) => {
      const { payload } = action;
      state.byId[payload.id] = payload;
      state.allIds.push(payload.id);
    },
    updateStep: (state, action) => {
      const { payload } = action;
      state.byId[payload.id] = payload;
    },
    deleteStep: (state, action) => {
      const { payload } = action;
      delete state.byId[payload.id];
      const idx = state.allIds.indexOf(payload.id);
      if (idx > -1) {
        state.allIds.splice(idx, 1);
      }
    },
  },
});

export const {
  addStep,
  addSteps,
  deleteStep,
  updateStep,
} = stepSlice.actions;

export const asyncFetchSteps = () => (dispatch) => (
  StepAPIUtils.fetchSteps().then((steps) => dispatch(addSteps(steps)))
);

export const asyncCreateStep = (step) => (dispatch) => (
  StepAPIUtils.createStep(step).then((step) => dispatch(addStep(step)))
);

export const asyncUpdateStep = (step) => (dispatch) => (
  StepAPIUtils.updateStep(step).then((step) => dispatch(updateStep(step)))
);

export const asyncDestroyStep = (step) => (dispatch) => (
  StepAPIUtils.destroyStep(step).then((step) => dispatch(deleteStep(step)))
);

export default stepSlice.reducer;
