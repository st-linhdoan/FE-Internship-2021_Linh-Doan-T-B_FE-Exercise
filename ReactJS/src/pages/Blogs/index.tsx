import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IPost } from '../../interface/IPost';
import Blog from '../../component/BLog';
import {Link} from "react-router-dom";
import './blogs.scss';

const Blogs: React.FC<IPost> = () => {
  const [listPost, setListPost] = useState([]);
  useEffect(() => {
    const domainApi = `https://6088e20da6f4a300174271e7.mockapi.io/articles`
    axios.get(domainApi)
      .then(function (res) {
        const data = res.data;
        setListPost(data);
      })
      .catch(function (err) {
        console.log(err);
      })
  }, [])

  return (
    <>
    <div className="container">
      <ul className="posts">
        {
          listPost.map((item: IPost) => {
            return (
              <li key={item.id.toString()} className="post-item">
                <Link to={`/articles/${item.id}`}>
                  <Blog post={item} />
                </Link>
              </li>
            
            )
          })
        }
      </ul>
    </div>
    </>
  );
}

export default Blogs;
