import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store'
import Blogs from './src/pages/Blogs';
import BlogDetails from './src/pages/BlogDetails'
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App>
        <Switch>
          <Route exact path="/" component={Blogs} />
          <Route path ="/articles/:id" component={BlogDetails} />
        </Switch>
      </App>
    </Provider>
  </Router>,
  document.getElementById('root')
);
