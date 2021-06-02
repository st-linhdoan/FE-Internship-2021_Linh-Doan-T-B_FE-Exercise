import {IPost} from './IPost'
interface IState {
  post: {
    data: IPost[];
  }
}
interface IAction {
  type:String,
  payload:any
}

export {IState, IAction}

