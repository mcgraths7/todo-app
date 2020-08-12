import { connect } from 'react-redux';

import StepListItem from './stepListItem';
import { asyncDestroyStep } from '../../reducers/stepSlice';

const mapDispatchToProps = (dispatch) => ({
  destroyStep: (step) => dispatch(asyncDestroyStep(step)),
});

export default connect(null, mapDispatchToProps)(StepListItem);
