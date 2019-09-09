import { connect } from 'react-redux';
import HabitForm from '../components/form/HabitForm';
import { createHabit } from '../action/habitsAction'

const mapDispatchtoProps = dispatch => ({
  handleSubmit(habit, description) {
    dispatch(createHabit(habit, description));
  }
});

export default connect(
  null,
  mapDispatchtoProps
)(HabitForm);
