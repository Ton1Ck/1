import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return <div className={s.item}>
    <img src='https://c4.wallpaperflare.com/wallpaper/3/1023/828/starcraft-protoss-dark-templar-zeratul-1280x1024-video-games-starcraft-hd-art-wallpaper-preview.jpg' alt="" />
    {props.message}
    <div>
      <span>Like:{props.likeCount}</span>
    </div>
    <span>En Taro Adun</span>
  </div>


}
export default Post;