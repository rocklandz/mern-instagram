import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../actions/postActions';
import Loader from '../components/Loader';
import Post from '../components/Post';

const PostPage = ({ match }) => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.currentPost);

  useEffect(() => {
    dispatch(getPost(match.params.id));
  }, [dispatch, match]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Post post={post} onPost={true} hideComment={false} />
      )}
    </>
  );
};

export default PostPage;
