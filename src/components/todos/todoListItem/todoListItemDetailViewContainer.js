import { connect } from 'react-redux';

import TodoListItemDetailView from './todoListItemDetailView';
import { updateTodo } from '../../../reducers/todoSlice';

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoListItemDetailView);
