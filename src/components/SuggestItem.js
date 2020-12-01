import React from 'react';
import avatar from '../images/avatar.jpg';

const SuggestItem = () => {
  return (
    <>
      <div className='suggest-container'>
        <img
          src={avatar}
          alt=''
          className='profile-avatar'
          height='32'
          width='32'
        />

        <div className='info'>
          <p className='bold-text'>johndoe</p>
          <p className='grey-text'>John Van Doe</p>
        </div>

        <div className='blue-text'>Follow</div>
      </div>
    </>
  );
};

export default SuggestItem;
