import { connect } from 'react-redux';

import StepList from './stepList';
import { asyncCreateStep } from '../../reducers/stepSlice';

const mapDispatchToProps = (dispatch) => ({
  createStep: (step) => dispatch(asyncCreateStep(step)),
});

export default connect(null, mapDispatchToProps)(StepList);
