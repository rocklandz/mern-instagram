import React from 'react';
import avatar from '../images/avatar.jpg';
import SuggestItem from './SuggestItem';

const Profile = () => {
  return (
    <section id='right'>
      <div id='profile'>
        <div className='profile-container'>
          <img
            src={avatar}
            alt=''
            className='profile-avatar'
            height='56'
            width='56'
          />

          <div className='info'>
            <p className='bold-text'>johndoe</p>
            <p className='grey-text'>John Van Doe</p>
          </div>

          <div className='blue-text'>Switch</div>
        </div>
      </div>

      <div id='suggestions'>
        <div className='suggestions-container'>
          <div className='suggestions-text '>
            <p className='grey-text bold-text'>Suggestions For You</p>
            <a href='/'>See All</a>
          </div>
          <SuggestItem />
          <SuggestItem />
          <SuggestItem />
        </div>
      </div>

      <div className='copyright'>© 2020 INSTAGRAM FROM FACEBOOK</div>
    </section>
  );
};

export default Profile;
