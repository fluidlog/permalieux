import React from 'react';

const OccupationTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default OccupationTitle;
