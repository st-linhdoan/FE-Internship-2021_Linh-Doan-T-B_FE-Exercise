import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../service/PathApi'
import { IPost } from '../../interface/IPost';
import Blog from '../../component/BLog';
import {Link} from "react-router-dom";
import './blogs.scss';

const Blogs: React.FC<IPost> = () => {
  const [listPost, setListPost] = useState(null);

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

  const ListPostContent = (props) => {
    return (
      <ul className="posts">
        {
          props.data.map((item: IPost) => {
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
    )
  }

  const PostRender = (Wrapped:any) => {
    return function (props: any) {
      if (!props.data) {
        return <p>Loading...</p>
      }
      else {
        if (!props.data.length) {
          return <p>Empty</p>
        }
        return <Wrapped {...props} />
      }
    }
  }

  const PostContent = PostRender(ListPostContent);

  return (
    <>
    <div className="container">
      <PostContent data = {listPost} />
    </div>
    </>
  );
}

export default Blogs;
