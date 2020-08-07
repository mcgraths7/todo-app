import React from 'react';

import StepListItemContainer from './stepListItemContainer';

const StepList = ({ steps }) => (
  <div>
    <ul>
      {steps.map((step) => <StepListItemContainer step={step} />)}
    </ul>
    {/* <StepForm /> */}
  </div>
);

export default StepList;
