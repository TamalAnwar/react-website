import React, { Component } from 'react';
import moment from 'moment';

export default class Single extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    console.log('Calling this page');
    var array = this.props.getTheSinglePost(this.props.match.params.slug);
    var post = array[0];
    if (!post) {
      return (
        <div>
          <h1 id="post-title">Blog</h1>
          <p className="meta">Loading...</p>
        </div>
      );
    }

    return (
      <div>
        <h1
          id="post-title"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <p className="meta">Last Updated: {moment(post.modified).fromNow()}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  }
}
