interface IPost {
  id:number,
  title: string,
  image: string,
  category: string,
  author: string,
  desc: string,
  createdAt: string,
  minsRead: string,
}
type IDetail = IPost & {
  content:string
}

export {IPost,IDetail};
