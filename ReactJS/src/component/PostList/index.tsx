import React, { useEffect, useState } from 'react';
import './post.scss';
import axios from 'axios';
import { IPost } from '../../interface/IPost';
import PostDetail from '../PostDetail';

const PostList: React.FC<IPost> = () => {
  const [listPost, setListPost] = useState([]);
  useEffect(() => {
    axios.get(`https://6088e20da6f4a300174271e7.mockapi.io/articles`)
      .then(function (res) {
        const data = res.data;
        setListPost(data);
      })
      .catch(function (err) {
        console.log(err);
      })
  }, [])
 
  return (
    <div className="container">
      <ul className="posts">
        {
          listPost.map((item:IPost, index:number) => {
            return (
              <li key={index.toString()} className="post-item">
                <PostDetail post={item} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default PostList;