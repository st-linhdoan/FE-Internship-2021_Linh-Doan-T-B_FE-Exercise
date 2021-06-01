import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const Blogs = lazy(() => import('./src/pages/Blogs'));
const BlogDetails = lazy(() => import('./src/pages/BlogDetails'));
ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
    <App>
      <Switch>
        <Route exact path="/" component={Blogs} />
        <Route path ="/articles/:id" component={BlogDetails} />
      </Switch>
    </App>
    </Suspense>
  </Router>,
  document.getElementById('root')
);
