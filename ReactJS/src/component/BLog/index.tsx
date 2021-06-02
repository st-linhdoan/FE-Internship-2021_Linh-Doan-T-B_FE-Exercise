import React from 'react';
import { IPost } from '../../interface/IPost';
import {formatDate} from '../../../until'

const PostDetail: React.FC<IPost> = ({ post }) => {
  const {category, title,desc,author,createdAt,minsRead} = post

  return (
    <div className="post">
      <div className="post-img">
        <img src={post.image} alt="" />
      </div>
      <div className="post-content">
        <h2 className="post-category">{category}</h2>
        <h3 className="post-title">{title}</h3>
        <p className="post-desc">{desc}</p>
        <div className="post-info">
          <span className="post-info-author">{author}</span>
          <span className="post-info-date">{formatDate(createdAt)}</span>
          <span className="post-info-read">{minsRead}</span>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
