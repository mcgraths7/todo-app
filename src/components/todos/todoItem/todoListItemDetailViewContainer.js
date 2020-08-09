import { connect } from 'react-redux';

import TodoListItemDetailView from './todoListItemDetailView';
import { updateTodo } from '../../../actions/todoActions';
import { fetchSteps } from '../../../actions/stepActions';
import {
  stepsByTodoId,
  allSteps,
} from '../../../reducers/selectors';

const mapStateToProps = (state, { todo }) => ({
  steps: stepsByTodoId(allSteps(state), todo.id),
});

const mapDispatchToProps = (dispatch) => ({
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchSteps: (todo) => dispatch(fetchSteps(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItemDetailView);
