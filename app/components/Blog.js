import React, { Component } from 'react';
import Post from './Post';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    if (this.props.posts.length < 5) {
      this.props.fetchAndStorePosts();
    }
  }

  render() {
    if (this.props.posts.length < 5) {
      return (
        <div>
          <h1 id="page-title">Blog</h1>
          <p>Loading</p>
        </div>
      );
    }

    return (
      <div>
        <h1 id="page-title">Blog</h1>
        {this.props.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
