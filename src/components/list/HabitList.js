import React from 'react';
import PropTypes from 'prop-types';
import HabitItem from './HabitItem';

function HabitList({ habits }) {
  const habitList = habits.map(habit => (
    <li key={habit.habit}>
      <HabitItem habit={habit} />
    </li>
  ));

  return (
    <ul>
      {habitList}
    </ul>
  );
}

HabitList.propTypes = {
  habits: PropTypes.arrayOf(PropTypes.shape({
    habit: PropTypes.string.isRequired,
    description: PropTypes.string
  })).isRequired
};

export default HabitList;
