import React from 'react';

import StepListItemContainer from './stepListItemContainer';
import StepForm from './stepForm';

const StepList = (props) => {
  const {
    steps,
    todo,
    createStep,
  } = props;
  return (
    <div>
      <ul>
        {steps.map((step) => (
          <StepListItemContainer
            todo={todo}
            step={step}
            key={step.id}
          />
        ))}
      </ul>
      <StepForm todo={todo} createStep={createStep} />
    </div>
  );
};

export default StepList;
