import React,{useEffect, useState} from 'react';
import BlogDetail from '../../component/BlogDetail';
import {useParams} from 'react-router';
import axios from 'axios';
import API from '../../service/PathApi'
import { IDetail } from '../../interface/IPost';
const BlogDetails: React.FC<IDetail> = () => {
  const {id} = useParams();
  const [detailBlog, setDetailBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios.get(API.API_ARTICLE + `/${id}`)
      .then(function (res) {
        if(res && res.status === 200){
          const data = res.data;
          setDetailBlog(data);
          setIsLoading(true);
        }
      })
      .catch(function (err) {
        console.log(err);
      })
  }, [])
  return (
    <>
    {
      isLoading ?<> <BlogDetail detail={detailBlog} /> {console.log(isLoading)} </>
      : <div className="img-loading">
          {console.log("img")}
          <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" />
        </div>
    }
    </>
  );
}

export default BlogDetails;
