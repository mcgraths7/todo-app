import { connect } from 'react-redux';

import { receiveStep, removeStep } from '../../actions/stepActions';
import StepList from './stepList';
import { allSteps, stepsByTodoId } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const steps = allSteps(state);
  const { todoId } = ownProps;
  return { steps: stepsByTodoId(steps, todoId) };
};

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (step) => dispatch(removeStep(step)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
