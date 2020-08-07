import { connect } from 'react-redux';

import { receiveStep } from '../../actions/stepActions';
import StepList from './stepList';

const mapStateToProps = (state, todoId) => ({
  steps: state.steps,
  todoId,
});

const mapDispatchToProps = (dispatch, { step }) => ({
  receiveStep: () => dispatch(receiveStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
