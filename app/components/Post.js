import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Post extends Component {
  render() {
    var { title, excerpt, slug } = { ...this.props.post };
    if (!this.props.post) {
      return <div>Loading</div>;
    }
    return (
      <div className="post-card">
        <h3>
          <Link
            to={`/blog/${slug}#`}
            dangerouslySetInnerHTML={{ __html: title.rendered }}
          />
        </h3>
        <div dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
      </div>
    );
  }
}
