import React from 'react';
import { IPost } from '../../interface/IPost';
const PostDetail: React.FC<IPost> = ({ post }) => {
  return (
    <div className="post">
      <div className="post-img">
        <img src={post.image} alt="" />
      </div>
      <div className="post-content">
        <h2 className="post-category">{post.category}</h2>
        <h3 className="post-title">{post.title}</h3>
        <p className="post-desc">{post.desc}</p>
        <div className="post-info">
          <span className="post-info-author">{post.author}</span>
          <span className="post-info-date">{post.createdAt}</span>
          <span className="post-info-read">{post.minsRead}</span>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;