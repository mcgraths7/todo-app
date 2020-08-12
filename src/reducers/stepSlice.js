import { createSlice } from '@reduxjs/toolkit';

export const stepSlice = createSlice({
  name: 'steps',
  initialState: {
    byId: {},
    allIds: [],
  },
  reducers: {
    addStep: (state, action) => {
      const { payload } = action;
      state.byId[payload.id] = payload;
      state.allIds.push(payload.id);
    },
    addSteps: (state, action) => {
      const { payload } = action;
      payload.map((step) => {
        state.byId[step.id] = step;
        state.allIds.push(step.id);
        return state;
      });
    },
    deleteStep: (state, action) => {
      const { payload } = action;
      delete state.byId[payload.id];
      const idx = state.allIds.indexOf(payload.id);
      if (idx > -1) {
        state.allIds.splice(idx, 1);
      }
    },
    updateStep: (state, action) => {
      const { payload } = action;
      state.byId[payload.id] = payload;
    },
  },
});

export const {
  addStep,
  addSteps,
  deleteStep,
  updateStep,
} = stepSlice.actions;

export default stepSlice.reducer;
