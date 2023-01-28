import React from 'react';

const PersonTitle = ({ record }) => {
  return <span>{record ? record['pair:firstName'] : ''}</span>;
};

export default PersonTitle;
