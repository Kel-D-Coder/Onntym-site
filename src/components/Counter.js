import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <>
      <CountUp start={1} end={7000} duration={20} />
    </>
  );
};

export default Counter;