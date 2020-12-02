import React from 'react';
import Profile from '../components/Profile';
import Posts from '../components/Posts';

const Home = () => {
  return (
    <div className='home-container'>
      <Posts />
      <Profile />
    </div>
  );
};

export default Home;
