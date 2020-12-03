import React, { useEffect, useState } from 'react';
import logo from '../images/ig-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const Login = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((state) => state.userLogin);
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (userInfo && userInfo.id) {
      history.push('/');
    }
  }, [history, userInfo]);

  return (
    <>
      <div className='form-container'>
        <div className='form-header'>
          <img src={logo} alt='logo' />
        </div>
        <form onSubmit={handleSubmit} className='register-form'>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your email'
            type='email'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            type='password'
          />
          <div>
            {error ? <p>{error}</p> : null}
            <button type='submit' className='form-button'>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>
      </div>

      <div className='form-container'>
        <p clas>
          No account?{' '}
          <a href='/register' className='blue-text bold-text'>
            Register
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
