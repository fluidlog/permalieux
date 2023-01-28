import React from 'react';

const HumanTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default HumanTitle;
