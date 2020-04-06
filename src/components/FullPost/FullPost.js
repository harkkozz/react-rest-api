import React, { Component } from 'react';
import axios from 'axios';
import classes from './FullPost.module.css';

class FullPost extends Component {
    state = {
        singlePost: null,
    }

    componentDidUpdate() {
      if(this.props.id) {
        if(!this.state.singlePost || (this.state.singlePost && this.state.singlePost.id !== this.props.id)) {
          axios.get(`/posts/${this.props.id}`)
          .then(response => {
              this.setState({ singlePost: response.data })
          })
        }
      }
    }
    render () {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        if(this.props.id) {
          post = <p style={{ textAlign: "center" }}>Loading ...</p>;
        }
        if(this.state.singlePost) {
            post = (
                <div className={ classes.FullPost }>
                    <h1>{ this.state.singlePost.title }</h1>
                    <p>{ this.state.singlePost.body }</p>
                    <div className={classes.Edit}>
                        <button className={ classes.Delete } onClick={() => this.props.removePost(this.props.id)}>Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;