import React from 'react';
import Profile from '../components/Profile';
import Posts from '../components/Posts';
import Guest from '../components/Guest';
import { useSelector } from 'react-redux';

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
        <Guest />
      )}
    </>
  );
};

export default Home;
