import React, { useEffect } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../actions/postActions';
import Loader from './Loader';

const Posts = () => {
  const { loading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <section id='posts'>
      <div className='posts-header'>
        <p className='bold-text'>We’ve Made Our Terms of Use Clearer.</p>
        <p style={{ margin: '.5rem 0' }} className='grey-text'>
          We’re updating our terms to make it easier to understand what is
          allowed on Instagram and how our service works. Continuing to use the
          app means you accept these updates.
        </p>
        <a href='/new-post' style={{ color: '#fff' }}>
          <button className='add-btn '>Add a new post</button>
        </a>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </>
      )}
    </section>
  );
};

export default Posts;
