import { connect } from 'react-redux';

import TodoListItemDetailView from './todoListItemDetailView';
import { removeTodo, toggleTodo } from '../../../actions/todoActions';
import { receiveSteps } from '../../../actions/stepActions';

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  toggleTodo: (todo) => dispatch(toggleTodo(todo)),
  receiveSteps: (steps) => dispatch(receiveSteps(steps)),
});

export default connect(null, mapDispatchToProps)(TodoListItemDetailView);
