import { connect } from 'react-redux';

import { createStep, destroyStep } from '../../actions/stepActions';
import StepList from './stepList';

const mapDispatchToProps = (dispatch) => ({
  createStep: (todo, step) => dispatch(createStep(todo, step)),
  destroyStep: (todo, step) => dispatch(destroyStep(todo, step)),
});

export default connect(null, mapDispatchToProps)(StepList);
