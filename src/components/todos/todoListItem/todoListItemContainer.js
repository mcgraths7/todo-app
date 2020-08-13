import { connect } from 'react-redux';

import TodoListItem from './todoListItem';
import { asyncUpdateTodo } from '../../../reducers/todoSlice';

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(asyncUpdateTodo(todo)),
});

export default connect(null, mapDispatchToProps)(TodoListItem);
