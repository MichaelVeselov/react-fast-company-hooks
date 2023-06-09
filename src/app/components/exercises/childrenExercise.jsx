import React from 'react';
import CollapseWrapper from '../common/collapse';

const ListComponent = (props) => {
  const { children } = props;

  return (
    <ul>
      {React.Children.map(children, (child, index) => {
        const config = {
          ...child.props,
          seqNumber: index + 1,
          key: index,
        };

        return React.cloneElement(child, config);
      })}
    </ul>
  );
};

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title='Упражнение'>
      <p className='mt-3'>
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{' '}
        <code>React.Children.toArray</code>
      </p>
      <ListComponent>
        <Component />
        <Component />
        <Component />
      </ListComponent>
    </CollapseWrapper>
  );
};

const Component = (props) => {
  const { seqNumber } = props;
  return <li>{seqNumber} - Компонент списка</li>;
};

export default ChildrenExercise;
