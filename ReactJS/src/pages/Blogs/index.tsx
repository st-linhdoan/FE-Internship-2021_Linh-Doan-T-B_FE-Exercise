import React, { useEffect, useState } from 'react';
import { IPost } from '../../interface/IPost';
import { IState } from '../../interface/IRedux';
import Blog from '../../component/BLog';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {getPost} from '../../../store/post/action'
import './blogs.scss';

const Blogs = () => {
  // const [listPost, setListPost] = useState([]);
  const dispatch = useDispatch();
  const listPost = useSelector((state:IState) => state.post.data);
  useEffect(() => {
    dispatch(getPost())
  }, [])
  console.log(listPost);
  return (
    <>
    <div className="container">
      <ul className="posts">
        {
          listPost && (listPost.map((item: IPost) => {
            return (
              <li key={item.id.toString()} className="post-item">
                <Link to={`/articles/${item.id}`}>
                  <Blog post={item} />
                </Link>
              </li>
            )
          }))
        }
      </ul>
    </div>
    </>
  );
}

export default Blogs;
