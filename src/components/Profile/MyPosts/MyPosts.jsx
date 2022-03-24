import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea name="" id="" cols="130" rows="10"></textarea><br />
      <button>Add Post</button><br />
    </div>

    <div className={s.posts}>
      <Post />
    </div>
  </div>


}
export default MyPosts;