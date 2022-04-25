/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import useApiData from './useApiData';

export default () => {
  const [apiData] = useApiData();
  console.log(apiData, 'apidata');
  return <div></div>;
};
