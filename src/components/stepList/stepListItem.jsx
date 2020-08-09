import React from 'react';

const StepListItem = (props) => {
  const { todo, step, destroyStep } = props;
  const completeStep = () => {
    destroyStep(todo, step);
  };
  return (
    <li key={step}>
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
