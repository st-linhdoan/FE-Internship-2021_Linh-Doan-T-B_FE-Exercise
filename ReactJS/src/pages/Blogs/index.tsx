import React, { useEffect, useState } from 'react';
import './blogs.scss';
import axios from 'axios';
import { IPost } from '../../interface/IPost';
import Blog from '../../component/BLog';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {
  Link
} from "react-router-dom";
import BlogDetails from '../BlogDetails';
const Blogs: React.FC<IPost> = () => {
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
    <>
    <div className="container">
      <ul className="posts">
        {
          listPost.map((item: IPost, index: number) => {
            return (
                <li key={index.toString()} className="post-item">
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