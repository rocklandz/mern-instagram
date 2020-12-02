import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Posts from './components/Posts';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className='container'>
          <Posts />

          <Profile />
        </div>
      </main>
    </>
  );
};

export default App;
