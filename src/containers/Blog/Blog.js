import React, { Component } from 'react';

import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './Blog.module.css';

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
      const transformedData = posts.map(item => ({
        ...item,
        author: 'Haris'
      }))
        this.setState({ posts: transformedData });
      })
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id })
  }

   addNewPost = async data => {
    await axios.post('/posts', data);
  }
  deletePost = async id => {
    await axios.delete(`/posts/${id}`);
  }
  render () {
    const posts = this.state.posts.map(post => 
      <Post key={post.id} title={post.title} clicked={() => this.postSelectedHandler(post.id)} /> 
    )
    return (
      <div>
        <section className={ classes.Posts }>
          { posts }
        </section>
        <section>
          <FullPost id={this.state.selectedPostId} removePost={ this.deletePost } />
        </section>
        <section>
          <NewPost addPost={this.addNewPost}/>
        </section>
      </div>
    );
  }
}

export default Blog;