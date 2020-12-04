import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';
import { getUserProfile } from '../actions/userActions';
import Loader from '../components/Loader';
import logo from '../images/ig-logo.png';
import imageHolder from '../images/post-holder.png';

const PostForm = ({ history }) => {
  const dispatch = useDispatch();

  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(imageHolder);

  const { loading, error, post } = useSelector((state) => state.createPost);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (image === imageHolder) {
      alert('Choose a picture from your computer');
    } else {
      dispatch(createPost({ image, caption }));
    }
  };

  const handleInput = (e) => {
    const selected = e.target.files[0];
    setImage(image);

    if (selected) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selected);
    }
  };

  useEffect(() => {
    if (post) {
      history.push('/');
    }
    dispatch(getUserProfile());
  }, [dispatch]);

  return (
    <>
      <div className='form-container'>
        <div className='form-header'>
          <img src={logo} alt='logo' />
        </div>
        <form onSubmit={handleSubmit} className='register-form'>
          <div className='image-holder'>
            <img src={image} />
            <input onChange={handleInput} type='file' />
          </div>
          <textarea
            onChange={(e) => setCaption(e.target.value)}
            placeholder='Post caption...'
            rows='3'
            maxLength='300'
            type='text'
            style={{
              width: '100%',
              border: '1px solid #efefef',
              resize: 'none',
              fontFamily: 'Segoe UI',
              fontSize: '14px',
              padding: '5px 8px',
              outline: 'none',
              wordBreak: 'break-word',
            }}
          />
          <div>
            {error ? <p>{error}</p> : null}
            <button type='submit' className='form-button'>
              {loading ? <Loader /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostForm;
