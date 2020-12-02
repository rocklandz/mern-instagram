import React, { useEffect } from 'react';
import SuggestItem from './SuggestItem';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/userActions';

const Profile = () => {
  const dispatch = useDispatch();
  // const { userInfo } = useSelector((state) => state.userLogin);
  // const { avatar, username, name } = userInfo;
  const { loading, error, user } = useSelector((state) => state.userProfile);
  const { avatar, username, name } = user;

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h5>Loading...</h5>
      ) : (
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
                <p className='bold-text'>{username}</p>
                <p className='grey-text'>{name}</p>
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
      )}
    </>
  );
};

export default Profile;
