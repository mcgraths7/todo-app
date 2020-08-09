import { connect } from 'react-redux';

import TodoListItemDetailView from './todoListItemDetailView';
import { updateTodo } from '../../../actions/todoActions';
import { todoById, allTodos } from '../../../reducers/selectors';

const mapStateToProps = (state, { todo }) => ({
  todo: todoById(allTodos(state), todo.id)[0],
});

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItemDetailView);
