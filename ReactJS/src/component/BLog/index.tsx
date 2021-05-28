import React from 'react';
import { IPost } from '../../interface/IPost';
const PostDetail: React.FC<IPost> = ({ post }) => {
  const {category, title,desc,author,createdAt,minsRead} = post
  const formartDate = (date:String) => {
    let res:string[] = date.split('T');
    let day:string = res[0].split('-').reverse().join('/');
    let time:string[] = res[1].split('.')[0].split(':');
    return `${day} ${time[0]}:${time[1]} EST`;
  }
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
          <span className="post-info-date">{formartDate(createdAt)}</span>
          {console.log(new Intl.DateTimeFormat('en-US', { year: 'numeric', day: 'numeric',month: 'numeric',  hour: '2-digit', minute: '2-digit'}).format(new Date (createdAt)))}
          <span className="post-info-read">{minsRead}</span>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;
