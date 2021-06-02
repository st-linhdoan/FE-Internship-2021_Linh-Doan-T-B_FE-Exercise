import * as types from '../types';
import axios from 'axios';
import API from '../../src/service/PathApi'
export const getPost = () => async (dispatch) => {
  const response = await axios.get(API.API_ARTICLE);
  dispatch({
    type: types.GET_POST,
    payload: response.data
  });
};
