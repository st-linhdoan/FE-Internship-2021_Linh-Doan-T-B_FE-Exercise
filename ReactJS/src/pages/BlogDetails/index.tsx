import React,{useEffect, useState} from 'react';
import BlogDetail from '../../component/BlogDetail';
import {useParams} from 'react-router';
import axios from 'axios';
import { IDetail } from '../../interface/IPost';
const BlogDetails: React.FC<IDetail> = () => {
  const {id} = useParams();
  const [detailBlog, setDetailBlog] = useState({});
  useEffect(() => {
    axios.get(`https://6088e20da6f4a300174271e7.mockapi.io/articles/${id}`)
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