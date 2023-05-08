import React, { useState, useEffect, useRef, useCallback } from 'react';
import CardWrapper from '../../common/Card';
import SmallTitle from '../../common/typografy/smallTitle';

const UseCallBackExample = () => {
  const [data, setData] = useState({});

  const withoutCallback = useRef(0);
  const withCallback = useRef(0);

  const handleChange = (event) => {
    const { target } = event;
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validateWithoutCallBack = (data) => {
    console.log(data);
  };

  useEffect(() => {
    withoutCallback.current++;
  }, [validateWithoutCallBack]);

  const validateWithCallBack = useCallback((data) => {
    console.log(data);
  }, []);

  useEffect(() => {
    withCallback.current++;
  }, [validateWithCallBack]);

  useEffect(() => {
    validateWithoutCallBack(data);
    validateWithCallBack(data);
  }, [data]);

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render withoutCallback: {withoutCallback.current}</p>
      <p>Render withCallback: {withCallback.current}</p>
      <label htmlFor='email' className='form-label'>
        Email
      </label>
      <input
        id='email'
        type='email'
        className='form-control mb-3'
        name='email'
        value={data.email || ''}
        onChange={handleChange}
      />
    </CardWrapper>
  );
};

export default UseCallBackExample;
