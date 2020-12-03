import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, updateUserProfile } from '../actions/userActions';
import avatarHolder from '../images/avatar.jpg';

const ManageProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userProfile);
  const { loading, error, success } = useSelector(
    (state) => state.userUpdateProfile
  );

  const [imgHolder, setImgHolder] = useState(avatarHolder);
  const [profileData, setProfileData] = useState({
    email: '',
    name: '',
    username: '',
    avatar: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUserProfile(profileData));
  };

  const handleInput = (e) => {
    const selected = e.target.files[0];
    setProfileData({ ...profileData, avatar: selected });

    if (selected) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgHolder(reader.result);
      };
      reader.readAsDataURL(selected);
    }
  };

  useEffect(() => {
    dispatch(getUserProfile());

    setProfileData(user);
    setImgHolder(user.avatar);
  }, [dispatch, user.name]);

  return (
    <>
      <div className='form-container'>
        <div className='form-header'>
          <h1 style={{ marginBottom: '2rem', lineHeight: '2rem' }}>
            Your Profile
          </h1>
        </div>
        <form onSubmit={handleSubmit} className='register-form'>
          <div className='avatar-input'>
            <img src={imgHolder} className='avatar-holder' />
            <input onChange={handleInput} type='file' placeholder='Avatar' />
          </div>

          <h4 className='label'>Email:</h4>
          <input
            value={profileData.email}
            onChange={(e) =>
              setProfileData({ ...profileData, email: e.target.value })
            }
            type='email'
          />

          <h4 className='label'>Username:</h4>
          <input
            value={profileData.username}
            onChange={(e) =>
              setProfileData({ ...profileData, username: e.target.value })
            }
            type='text'
          />

          <h4 className='label'>Name:</h4>
          <input
            value={profileData.name}
            onChange={(e) =>
              setProfileData({ ...profileData, name: e.target.value })
            }
            type='text'
          />

          <div>
            <button type='submit' className='form-button'>
              {loading ? 'Updating...' : 'Update'}
            </button>
            {success && <p>Update success!</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default ManageProfile;
