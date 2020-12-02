import React, { useEffect } from 'react';
import Post from './Post';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../actions/postActions';

const Posts = () => {
  const { loading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <section id='posts'>
      {loading ? (
        <h5>Loading...</h5>
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
