import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Blogs from './src/pages/Blogs';
import BlogDetails from './src/pages/BlogDetails'
ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Blogs} />
        <Route path ="/articles/:id" component={BlogDetails} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
