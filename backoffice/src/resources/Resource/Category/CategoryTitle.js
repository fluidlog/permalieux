import React from 'react';

const CategoryTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default CategoryTitle;
