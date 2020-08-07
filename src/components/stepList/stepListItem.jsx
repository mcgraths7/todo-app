import React from 'react';

const StepListItem = (props) => {
  const { step } = props;
  return (
    <li>
      <h4>{step.title}</h4>
      <p>{step.body}</p>
      <button type="button">
        {step.isDone ? 'Undo' : 'Done'}
      </button>
    </li>
  );
};

export default StepListItem;
