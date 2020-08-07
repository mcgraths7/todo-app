import { connect } from 'react-redux';

import TodoListItemDetailView from './todoListItemDetailView';
import { removeTodo, toggleTodo } from '../../../actions/todoActions';

const mapDispatchToProps = dispatch => ({
  removeTodo: todo => dispatch(removeTodo(todo)),
  toggleTodo: todo => dispatch(toggleTodo(todo))
});

export default connect(null, mapDispatchToProps)(TodoListItemDetailView)