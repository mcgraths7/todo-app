import { connect } from 'react-redux';

import { receiveStep } from '../../actions/stepActions';
import StepList from './stepList';

const mapDispatchToProps = (dispatch) => ({
  receiveStep: (step) => dispatch(receiveStep(step)),
});

export default connect(null, mapDispatchToProps)(StepList);
