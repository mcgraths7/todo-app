import { connect } from 'react-redux';

import TodoListItemDetailView from './todoListItemDetailView';
import { removeTodo, toggleTodo, receiveTodo } from '../../../actions/todoActions';
import { todoById, allTodos } from '../../../reducers/selectors';

const mapStateToProps = (state, { todo }) => ({
  todo: todoById(allTodos(state), todo.id)[0],
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  toggleTodo: (todo) => dispatch(toggleTodo(todo)),
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItemDetailView);
