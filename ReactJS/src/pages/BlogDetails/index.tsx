import React,{useEffect, useState} from 'react';
import BlogDetail from '../../component/BlogDetail';
import {useParams} from 'react-router';
import axios from 'axios';
import API from '../../service/PathApi'
import { IDetail } from '../../interface/IPost';

const BlogDetails: React.FC<IDetail> = () => {
  const {id} = useParams();
  const [detailBlog, setDetailBlog] = useState(null);

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

  const ListDetailContent = (props) => {
    return (
      <BlogDetail detail = {props.data} />
    )
  }

  const DetailRender = (Wrapped: any) => {
    return function (props: any) {
      if(!props.data){
        return <p>Loading...</p>
      }
      else {
        if (JSON.stringify(props.data) === '{}'){
          return <p>Empty</p>
        }
        return <Wrapped {...props}/>
      }
    }
  }

  const DetailContent = DetailRender(ListDetailContent);

  return (
    <DetailContent data = {detailBlog} />
  );
}

export default BlogDetails;
