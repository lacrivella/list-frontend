import React from 'react';
import PropTypes from 'prop-types';

function HabitItem({ habit }) {
  return (
    <section>
      <h2>{habit.habit}</h2>
      <p>{habit.description}</p>
    </section>
  );
}

HabitItem.propTypes = {
  habit: PropTypes.shape({
    habit: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired
};

export default HabitItem;
