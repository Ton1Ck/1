import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return <div>
    My posts
    <div>
      <textarea name="" id="" cols="130" rows="10"></textarea><br />
      <button>Add Post</button>

    </div>

    <div className={s.posts}>
      <Post message='En Taro Adun' likeCount ='15'/>
      <Post message='En Taro Tassadar' likeCount ='25'/>
      <Post message='Бать могу работать' likeCount = '145'/>
    </div>
  </div>


}
export default MyPosts;