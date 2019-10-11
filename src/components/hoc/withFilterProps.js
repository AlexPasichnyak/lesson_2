import React from 'react';

const withFilterProps = (Component) => ({ arrLists, typeFramework }) => {
  const filteredList = arrLists.filter((item) => item.typeFw === typeFramework);
  return <Component arrLists={filteredList} />;
};

export default withFilterProps;
