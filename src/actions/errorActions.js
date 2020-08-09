export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
// Synchronous Actions
export const receiveError = (error) => ({
  type: RECEIVE_ERRORS,
  error,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
