import { useState, useEffect, useCallback, memo } from 'react';

import PropTypes from 'prop-types';

const LogOutButton = (props) => {
  const { onLogOut } = props;

  useEffect(() => {
    console.log('render button');
  });

  return (
    <button className='btn btn-primary me-3' onClick={onLogOut}>
      LogOut
    </button>
  );
};

LogOutButton.propTypes = {
  onLogOut: PropTypes.func,
};

function areEqual(prevState, nextState) {
  if (prevState.onLogOut !== nextState.onLogOut) {
    return false;
  } else {
    return true;
  }
}

const MemoizedLogOutButton = memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
  const [otherState, setOtherState] = useState(false);

  const handleLogOut = useCallback(() => {
    localStorage.removeItem('auth');
  }, [props]);

  useEffect(() => {
    console.log('render component');
  });

  return (
    <>
      <MemoizedLogOutButton onLogOut={handleLogOut} />
      <button
        className='btn btn-primary'
        onClick={() => setOtherState(!otherState)}
      >
        Change state!
      </button>
    </>
  );
};

export default MemoWithUseCallbackExample;
