import { IAction } from '../../src/interface/IRedux';
import * as types from '../types';

const intialState = {
  data: []
};

export const postReducer = (state = intialState, action:IAction) => {
  switch (action.type) {
    case types.GET_POST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
