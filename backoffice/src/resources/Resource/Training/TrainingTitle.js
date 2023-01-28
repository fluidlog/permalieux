import React from 'react';

const TrainingTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default TrainingTitle;
