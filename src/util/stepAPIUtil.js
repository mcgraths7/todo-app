export const fetchSteps = () => (
  $.ajax({
    method: 'GET',
    url: 'api/steps',
  })
);

export const createStep = (step) => (
  $.ajax({
    method: 'POST',
    url: 'api/steps',
    data: { step },
  })
);

export const showStep = (step) => (
  $.ajax({
    method: 'GET',
    url: `api/steps/${step.id}`,
  })
);

export const updateStep = (step) => (
  $.ajax({
    method: 'PATCH',
    url: `api/steps/${step.id}`,
  })
);

export const destroyStep = (step) => (
  $.ajax({
    method: 'DELETE',
    url: `api/steps/${step.id}`,
  })
);

