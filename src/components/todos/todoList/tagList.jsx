import React from 'react';

const TagList = (props) => {
  const { tagNames } = props;

  return (
    <div>
      <h4>Tags</h4>
      <small>{tagNames.join(' | ')}</small>
    </div>
  );
};

export default TagList;
