import React,{useEffect, useState} from 'react';
import BlogDetail from '../../component/BlogDetail';
import {useParams} from 'react-router';
import axios from 'axios';
import API from '../../service/PathApi'
import { IDetail } from '../../interface/IPost';
import Portal from '../../component/Portal';
const BlogDetails: React.FC<IDetail> = () => {
  const {id} = useParams();
  const [detailBlog, setDetailBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [notifi, setNoifi] = useState(false);

  useEffect(() => {
    axios.get(API.API_ARTICLE + `/${id}`)
      .then(function (res) {
        if(res && res.status === 200){
          const data = res.data;
          setDetailBlog(data);
          setIsLoading(true);
        }
      })
      .catch(function(err) {
        setNoifi(true);
      })
  }, [])
  
  return (
    <>
    {
      !notifi ? (
        isLoading ?<BlogDetail detail={detailBlog} />
        : <div className="img-loading">
            <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="nice"/>
          </div>
      )
      : <Portal />
    }
    </>
  );
}

export default BlogDetails;
