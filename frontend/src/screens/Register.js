import React, { useEffect, useState } from 'react';
import logo from '../images/ig-logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const Register = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');

  const { loading, error } = useSelector((state) => state.userRegister);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userRegister);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(email, password, name, username));
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (userInfo && userInfo.id) {
      history.push('/');
    }
    if (success) {
      setTimeout(() => {
        history.push('/');
      }, 1000);
    }
  }, [history, userInfo, success]);

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
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            type='text'
          />
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            type='text'
          />
          <div>
            <button type='submit' className='form-button'>
              {loading ? 'Loading...' : 'Register'}
            </button>
          </div>
        </form>
      </div>

      <div className='form-container'>
        <p clas>
          Have an account?{' '}
          <a href='/login' className='blue-text bold-text'>
            Login
          </a>
        </p>
      </div>
    </>
  );
};

export default Register;
