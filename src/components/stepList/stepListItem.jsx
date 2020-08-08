import React from 'react';

const StepListItem = (props) => {
  const { step, removeStep } = props;
  const completeStep = () => {
    removeStep(step);
  };
  return (
    <li key={step.id}>
      <h4>
        {step.title}
        <span>
          <button type="button" onClick={completeStep}>Complete</button>
        </span>
      </h4>
    </li>
  );
};

export default StepListItem;
