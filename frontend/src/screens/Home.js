import React from 'react';
import Profile from '../components/Profile';
import Posts from '../components/Posts';
import { useSelector } from 'react-redux';

const Home = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      {userInfo && userInfo.id ? (
        <div className='home-container'>
          <Posts />
          <Profile />
        </div>
      ) : (
        <>
          <h2 style={{ textAlign: 'center' }}>
            You need to <a href='/login'>Login</a> /{' '}
            <a href='/register'>Register</a> first
          </h2>
        </>
      )}
    </>
  );
};

export default Home;
