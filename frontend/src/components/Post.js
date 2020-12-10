import React, { useState } from 'react';
import Moment from 'react-moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  createComment,
  createCommentInside,
  likePost,
  likePostInside,
} from '../actions/postActions';

const Post = ({ post, onPost = false, hideComment = true }) => {
  const dispatch = useDispatch();
  const { _id, user, image, likes, comments, createdAt, caption } = post;

  const [cmtText, setCmtText] = useState('');

  const { id } = useSelector((state) => state.userLogin.userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    onPost
      ? dispatch(createCommentInside(_id, cmtText))
      : dispatch(createComment(_id, cmtText));

    setCmtText('');
  };

  const handleLike = () => {
    console.log(onPost);
    onPost ? dispatch(likePostInside(_id)) : dispatch(likePost(_id));
  };

  return (
    <section id='post'>
      <div className='post-header'>
        <a href={`/user/${user._id}`}>
          <img
            src={user.avatar}
            alt=''
            className='avatar'
            width='32'
            height='32'
          />
        </a>
        <a href={`/user/${user._id}`} className='post-user'>
          {user.username}
        </a>
        <a href={`/post/${_id}`} className='post-options'>
          <svg
            aria-label='Tùy chọn khác'
            className='_8-yf5 '
            fill='#262626'
            height='16'
            viewBox='0 0 48 48'
            width='16'
          >
            <circle
              clipRule='evenodd'
              cx='8'
              cy='24'
              fillRule='evenodd'
              r='4.5'
            ></circle>
            <circle
              clipRule='evenodd'
              cx='24'
              cy='24'
              fillRule='evenodd'
              r='4.5'
            ></circle>
            <circle
              clipRule='evenodd'
              cx='40'
              cy='24'
              fillRule='evenodd'
              r='4.5'
            ></circle>
          </svg>
        </a>
      </div>

      <div className='post-image'>
        <img src={image} alt='' />
      </div>

      <div className='post-comments'>
        <div className='post-reacts'>
          <ul>
            <li>
              <span className='react like-btn' onClick={handleLike}>
                {likes.map((like) => like.user._id).includes(id) ? (
                  <svg
                    fill='#ed4956'
                    height='24'
                    viewBox='0 0 48 48'
                    width='24'
                  >
                    <path d='M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                  </svg>
                ) : (
                  <svg
                    fill='#262626'
                    height='24'
                    viewBox='0 0 48 48'
                    width='24'
                  >
                    <path d='M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z'></path>
                  </svg>
                )}
              </span>
            </li>
            <li>
              <span className='react comment-btn'>
                <svg fill='#262626' height='24' viewBox='0 0 48 48' width='24'>
                  <path
                    clipRule='evenodd'
                    d='M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z'
                    fillRule='evenodd'
                  ></path>
                </svg>
              </span>
            </li>
            <li>
              <a href='/' className='react share-btn'>
                <svg fill='#262626' height='24' viewBox='0 0 48 48' width='24'>
                  <path d='M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z'></path>
                </svg>
              </a>
            </li>
          </ul>
          <span>
            <a href='/' className='react bookmark'>
              <svg
                aria-label='Lưu'
                className='_8-yf5 '
                fill='#262626'
                height='24'
                viewBox='0 0 48 48'
                width='24'
              >
                <path d='M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z'></path>
              </svg>
            </a>
          </span>
        </div>

        {likes.length > 0 ? (
          <div className='likes'>
            Liked by <span className='bold-text'>{likes[0].user.username}</span>
            {likes.length > 1 && (
              <>
                {' '}
                and{' '}
                <span className='bold-text'>
                  {likes.length - 1} {likes.length === 2 ? 'other' : 'others'}
                </span>
              </>
            )}
          </div>
        ) : null}

        <div className='comments'>
          <p className='comment'>
            {caption ? (
              <>
                <span className='user bold-text'>{user.username} </span>
                {caption}{' '}
              </>
            ) : null}
          </p>

          {comments.length > 0 ? (
            <>
              {hideComment && comments.length > 4 && (
                <a
                  style={{ marginBottom: '4px' }}
                  className='grey-text'
                  href={`/post/${_id}`}
                >
                  View all {comments.length} comments
                </a>
              )}

              {(hideComment ? comments.slice(0, 3) : comments).map((cmt) => (
                <p key={cmt._id} className='comment'>
                  <span className='user bold-text'>{cmt.user.username} </span>{' '}
                  {cmt.comment}
                </p>
              ))}
            </>
          ) : null}
        </div>

        <div className='moment grey-text'>
          <Moment fromNow>{createdAt}</Moment>
        </div>

        <div className='comment-form'>
          <form onSubmit={handleSubmit}>
            <input
              placeholder='Add a comment...'
              height='18'
              wrap='off'
              autoComplete='off'
              autoCorrect='off'
              value={cmtText}
              onChange={(e) => setCmtText(e.target.value)}
            ></input>
            <button type='submit' className={cmtText !== '' ? 'focusing' : ''}>
              Post
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Post;
