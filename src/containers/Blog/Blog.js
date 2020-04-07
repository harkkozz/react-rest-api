import React, { Component } from 'react';
import axios from 'axios';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost';
import classes from './Blog.module.css';
import FullPost from './FullPost/FullPost';
import { Route, NavLink } from 'react-router-dom';

class Blog extends Component {
  
   addNewPost = async data => {
    await axios.post('/posts', data);
  };

  deletePost = async id => {
    await axios.delete(`/posts/${id}`);
  };

  render () {
    return (
      <div className={ classes.Blog }>
        <header>
          <nav>
            <ul>
              <li><NavLink to="/" activeClassName="my-active" activeStyle={{
                color: '#fa923f',
                textDecoration: 'underline'
              }}>Posts</NavLink></li>
              <li><NavLink to={
                {
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }
              }>New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts />} /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" exact component={FullPost} />
      </div>
    );
  }
}

export default Blog;