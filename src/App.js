import React, { useEffect } from 'react';
import Form from './components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsersAsync } from './redux/reducers/users/users.thunks';

const App = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.errorMessage);
  const isLoading = useSelector(state => state.isLoading);

  useEffect(() => {
    dispatch(loadUsersAsync());
  }, []);

  return (
    <>
      <Form />
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default App;
