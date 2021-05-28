import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../service/PathApi'
import { IPost } from '../../interface/IPost';
import Blog from '../../component/BLog';
import './blogs.scss';

const Blogs: React.FC<IPost> = () => {
  const [listPost, setListPost] = useState([]);
  useEffect(() => {
    axios.get(API.API_ARTICLE)
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
          listPost.map((item: IPost) => {
            return (
              <li key={item.id.toString()} className="post-item">
                <Blog post={item} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Blogs;
