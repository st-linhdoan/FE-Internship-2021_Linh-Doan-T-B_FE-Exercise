import React,{useEffect, useState} from 'react';
import BlogDetail from '../../component/BlogDetail';
import {useParams} from 'react-router';
import axios from 'axios';
import API from '../../service/PathApi'
import { IDetail } from '../../interface/IPost';
const BlogDetails: React.FC<IDetail> = () => {
  const {id} = useParams();
  const [detailBlog, setDetailBlog] = useState({});
  useEffect(() => {
    axios.get(API.API_ARTICLE + `/${id}`)
      .then(function (res) {
        const data = res.data;
        setDetailBlog(data);
      })
      .catch(function (err) {
        console.log(err);
      })
    
  }, [])
  return (
    <BlogDetail detail = {detailBlog}/>
  );
}

export default BlogDetails;