import React, { useEffect } from 'react';
import SuggestItem from './SuggestItem';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';

const Profile = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, user } = useSelector((state) => state.userProfile);
  const { _id, avatar, username, name } = user;

  return (
    <>
      {loading ? null : (
        <section id='right'>
          <div id='profile'>
            <div className='profile-container'>
              <a href={`/user/${_id}`}>
                <img
                  src={avatar}
                  alt=''
                  className='profile-avatar'
                  height='56'
                  width='56'
                />
              </a>

              <div className='info'>
                <a href={`/user/${_id}`} className='bold-text'>
                  <p>{username}</p>
                </a>
                <p className='grey-text'>{name}</p>
              </div>

              <a onClick={() => dispatch(logout())} className='blue-text'>
                Logout
              </a>
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
      )}
    </>
  );
};

export default Profile;
