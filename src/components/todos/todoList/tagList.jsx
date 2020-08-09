import React from 'react';

import Tag from './tag';

const TagList = (props) => {
  const { tagNames } = props;
  const tagItems = tagNames.map((tagName) => <Tag tagName={tagName} />);

  return (
    <div>
      <h4>Tag List</h4>
      <ul>
        {tagItems}
      </ul>
    </div>
  );
};

export default TagList;
