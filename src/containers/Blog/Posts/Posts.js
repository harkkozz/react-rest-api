import React, { Component } from 'react'
import axios from 'axios';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';
import classes from './Posts.module.css';

class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        const posts = response.data;
      const transformedData = posts.map(item => ({
        ...item,
        author: 'Haris'
      }))
        this.setState({ posts: transformedData });
      })
  };

  postSelectedHandler = id => {
    this.props.history.push({ path: `/${id}`})
  };

  render () {
    let posts = this.state.posts.map(post => 
      <Link to={`/${post.id}`} key={post.id}>
        <Post title={post.title} clicked={() => this.postSelectedHandler(post.id)} /> 
      </Link>
    )
    return (
      <section className={ classes.Posts }>
        { posts }
      </section>
    )
  }
}

export default Posts;