import React from 'react';

const ContributionTitle = ({ record }) => {
  return <span>{record ? record['pair:label'] : ''}</span>;
};

export default ContributionTitle;
