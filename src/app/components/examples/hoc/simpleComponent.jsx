import { useState } from 'react';

export const SimpleComponent = (props) => {
  const {
    onLogIn = Function.prototype,
    onLogOut = Function.prototype,
    isAuth = '',
  } = props;

  const [loginStatus, setLoginStatus] = useState(isAuth === 'token');

  const handleClick = () => {
    loginStatus ? onLogOut() : onLogIn();
    setLoginStatus((loginStatus) => !loginStatus);
  };

  return (
    <div>
      <button className='btn btn-primary' onClick={handleClick}>
        {loginStatus ? 'LogOut' : 'LogIn'}
      </button>
    </div>
  );
};
