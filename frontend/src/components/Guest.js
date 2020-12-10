import React from 'react';

const Guest = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>
        You need to{' '}
        <a style={{ color: '#0095f6' }} href='/login'>
          Login
        </a>{' '}
        /{' '}
        <a style={{ color: '#0095f6' }} href='/register'>
          Register
        </a>{' '}
        first
      </h2>
    </>
  );
};

export default Guest;
