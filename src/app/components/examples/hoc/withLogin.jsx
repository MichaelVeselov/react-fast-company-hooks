import SmallTitle from '../../common/typografy/smallTitle';

export const withLogin = (Component) => (props) => {
  const isLogin = localStorage.getItem('auth');
  return (
    <>{isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}</>
  );
};
