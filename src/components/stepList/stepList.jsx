import React from 'react';

import StepListItemContainer from './stepListItemContainer';
import StepForm from './stepForm';

const StepList = (props) => {
  const { steps } = props;
  return (
    <div>
      lol
      <ul>
        {steps.map((step) => <StepListItemContainer step={step} />)}
      </ul>
      <StepForm />
    </div>
  );
};

export default StepList;
