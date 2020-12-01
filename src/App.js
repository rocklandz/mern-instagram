import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Post from './components/Post';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Post />
          <Profile />
        </div>
      </main>
    </>
  );
};

export default App;
