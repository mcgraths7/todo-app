import React from 'react';

const Tag = (props) => {
  const { tagName } = props;
  return (
    <li key={tagName}>{tagName}</li>
  );
};

export default Tag;
