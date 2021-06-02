import React from 'react';
import { IDetail } from '../../interface/IPost';
import './index.scss'
const BlogDetail : React.FC<IDetail> = ({detail}) => {
  return (
    <>
      <div className="blog-detail">
        <h1>Blog Details</h1>
        <h2 className="detail-category">{detail.category}</h2>
        <h3 className="detail-title">{detail.title}</h3>
        <p className="detail-desc">{detail.desc}</p>
        <img className="detail-img" src= {detail.image} />
        <p className="detail-content">{detail.content}</p>
        <div className="detail-info">
          <span className="detail-author">{detail.author}</span> 
          <span className="detail-date">{detail.createdAt}</span>
          <span className="detail-read">{detail.minsRead}</span>
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
