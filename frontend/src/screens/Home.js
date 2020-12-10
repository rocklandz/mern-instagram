import React from 'react';
import Profile from '../components/Profile';
import Posts from '../components/Posts';
import { useSelector } from 'react-redux';
import Login from './Login';

const Home = () => {
  const { userInfo } = useSelector((state) => state.userLogin);

  return (
    <>
      {userInfo && userInfo.token ? (
        <div className='home-container'>
          <Posts />
          <Profile />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
