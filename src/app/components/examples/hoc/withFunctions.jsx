import CardWrapper from '../../common/Card';

export const withFunctions = (Component) => (props) => {
  const isAuth = localStorage.getItem('auth');

  const onLogIn = () => {
    localStorage.setItem('auth', 'token');
  };

  const onLogOut = () => {
    localStorage.removeItem('auth');
  };

  return (
    <CardWrapper>
      <Component
        {...props}
        isAuth={isAuth}
        onLogIn={onLogIn}
        onLogOut={onLogOut}
      />
    </CardWrapper>
  );
};
