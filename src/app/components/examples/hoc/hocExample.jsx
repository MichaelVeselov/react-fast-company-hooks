import React from 'react';
import Component from './someComponent';

import CardWrapper from '../../common/Card';
import SmallTitle from '../../common/typografy/smallTitle';
import Divider from '../../common/divider';

import { withLogin } from './withLogin';
import { withPropStyles } from './withPropStyles';

const HOCExample = () => {
  const ComponentWithAuth = withLogin(Component);
  const ComponentWithPropStyles = withPropStyles(Component);

  const MixedComponent = withPropStyles(ComponentWithAuth);

  return (
    <>
      <CardWrapper>
        <SmallTitle>1. Обычный компонент</SmallTitle>
        <Divider />
        <Component />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>2. Функциональный HOC</SmallTitle>
        <Divider />
        <ComponentWithAuth />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>3. HOC With Styles and Props</SmallTitle>
        <Divider />
        <ComponentWithPropStyles />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>4. Composed HOC</SmallTitle>
        <Divider />
        <MixedComponent />
      </CardWrapper>
    </>
  );
};

export default HOCExample;
