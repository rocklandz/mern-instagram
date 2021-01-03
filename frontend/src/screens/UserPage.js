import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfileById } from '../actions/userActions';
import { getUserPosts } from '../actions/postActions';

const UserPage = ({ match }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.getProfile);
  const { posts } = useSelector((state) => state.currentUserPosts);

  useEffect(() => {
    dispatch(getUserProfileById(match.params.id));
    dispatch(getUserPosts(match.params.id));
  }, [dispatch, match]);

  return (
    <div className='user-container'>
      <div className='user-header'>
        <div className='user-avatar'>
          <img src={user.avatar} alt='' />
        </div>
        <div className='user-profile'>
          <h2>{user.username}</h2>
          <p className='bold-text'>{user.name}</p>
        </div>
      </div>

      <div className='user-posts'>
        {!posts ? null : (
          <>
            {posts.map((post) => (
              <a href={`/post/${post._id}`} className='user-post'>
                <img src={post.image} alt='' />
              </a>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default UserPage;
