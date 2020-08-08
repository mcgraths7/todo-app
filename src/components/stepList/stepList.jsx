import React from 'react';

import StepListItemContainer from './stepListItemContainer';
import StepForm from './stepForm';

const StepList = (props) => {
  const {
    steps,
    todoId,
    receiveStep,
    removeStep,
  } = props;
  return (
    <div>
      <ul>
        {steps.map((step) => (
          <StepListItemContainer
            step={step}
            key={step.id}
            removeStep={removeStep}
          />
        ))}
      </ul>
      <StepForm todoId={todoId} receiveStep={receiveStep} />
    </div>
  );
};

export default StepList;
