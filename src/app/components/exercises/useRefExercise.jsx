import React, { useRef } from 'react';
import CollapseWrapper from '../common/collapse';
const UseRefExercise = () => {
  const elemRef = useRef();

  const handleChange = () => {
    elemRef.current.querySelector('small').textContent = 'text';
    elemRef.current.style.width = '80px';
    elemRef.current.style.height = '150px';
  };

  return (
    <CollapseWrapper title='Упражнение'>
      <p className='mt-3'>
        У вас есть блок, у которого заданы ширина и высота. Добавьте кнопку, при
        нажатии которой изменятся следующие свойства:
      </p>
      <ul>
        <li>Изменится содержимое блока на &quot;text&quot;</li>
        <li>высота и ширина станут равны 150 и 80 соответственно</li>
      </ul>
      <div
        ref={elemRef}
        className='bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-3'
        style={{
          height: 40,
          width: 60,
          color: 'white',
        }}
      >
        <small>Блок</small>
      </div>
      <button className='btn btn-secondary' onClick={handleChange}>
        Change block
      </button>
    </CollapseWrapper>
  );
};

export default UseRefExercise;
