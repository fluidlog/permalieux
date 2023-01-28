import React from 'react';

const JobTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default JobTitle;
