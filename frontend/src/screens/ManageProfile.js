import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../actions/userActions';

const ManageProfile = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const { user } = useSelector((state) => state.userProfile);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateUserProfile({
        email,
        password,
        name,
        username,
        avatar,
      })
    );
  };

  useEffect(() => {
    dispatch(getUserProfile());

    setEmail(user.email);
    setName(user.name);
    setUsername(user.username);
    setAvatar(user.avatar);
  }, [dispatch]);

  return (
    <>
      <div className='form-container'>
        <div className='form-header'>
          <h1 style={{ marginBottom: '2rem' }}>Update profile</h1>
        </div>
        <form onSubmit={handleSubmit} className='register-form'>
          <h4 className='label'>Email:</h4>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
          />
          <h4 className='label'>Password:</h4>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
          />
          <h4 className='label'>Username:</h4>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type='text'
          />
          <h4 className='label'>Name:</h4>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type='text'
          />
          <h4 className='label'>Avatar:</h4>
          <input
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            type='text'
          />
          <div>
            <button type='submit' className='form-button'>
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManageProfile;
