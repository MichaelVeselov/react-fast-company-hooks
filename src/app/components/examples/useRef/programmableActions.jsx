import React, { useRef } from 'react';
import CardWrapper from '../../common/Card';
import SmallTitle from '../../common/typografy/smallTitle';
import Divider from '../../common/divider';
const ProgrammableActionsExample = () => {
  const inputRef = useRef();

  const handleClickFocus = () => {
    inputRef.current.focus();
  };

  const handleClickWidth = () => {
    inputRef.current.style.width = '100px';
  };

  return (
    <CardWrapper>
      <SmallTitle className='card-title'>
        Программируемые действия и свойства
      </SmallTitle>
      <Divider />
      <label htmlFor='email' className='form-label'>
        Email
      </label>
      <input
        id='email'
        ref={inputRef}
        type='email'
        className='form-control mb-3'
      />
      <button className='btn btn-primary me-3' onClick={handleClickFocus}>
        Focus input
      </button>
      <button className='btn btn-secondary' onClick={handleClickWidth}>
        Change width
      </button>
    </CardWrapper>
  );
};

export default ProgrammableActionsExample;
