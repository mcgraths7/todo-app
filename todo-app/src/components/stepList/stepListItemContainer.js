import { connect } from 'react-redux';

import StepListItem from './stepListItem';
import { receiveStep, removeStep } from '../../actions/stepActions';

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
  removeStep: (step) => dispatch(removeStep(step)),
});

export default connect(null, mapDispatchToProps)(StepListItem);
