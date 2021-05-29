import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../service/PathApi'
import { IPost } from '../../interface/IPost';
import Blog from '../../component/BLog';
import {Link} from "react-router-dom";
import './blogs.scss';
import Portal from '../../component/Portal';

const Blogs: React.FC<IPost> = () => {
  const [listPost, setListPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notifi, setNoifi] = useState(false);

  useEffect(() => {
    axios.get(API.API_ARTICLE)
      .then(function (res) {
        if(res && res.status === 200){
          const data = res.data;
          setListPost(data);
          setIsLoading(false);
        }
      })
      .catch(function (err) {
        console.log(err);
        setNoifi(true);
      })
  }, [])

  return (
    <>
    <div className="container">
      {
      !notifi ? (
      !isLoading ? 
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
      : 
        <div className="img-loading">
          <img src= "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
        </div>
      )
      : <Portal/>
      }
    </div>
    </>
  );
}

export default Blogs;
