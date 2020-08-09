import { connect } from 'react-redux';

import StepListItem from './stepListItem';
import { createStep, destroyStep } from '../../actions/stepActions';

const mapDispatchToProps = (dispatch) => ({
  createStep: (todo, step) => dispatch(createStep(todo, step)),
  destroyStep: (todo, step) => dispatch(destroyStep(todo, step)),
});

export default connect(null, mapDispatchToProps)(StepListItem);
