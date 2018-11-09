import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NProgress from 'nprogress';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const endpoint = 'http://tamalweb.com/wp-json/wp/v2/posts?per_page=10';

    console.log('Fetching new data.');
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => this.setState({ posts: data }));
  }

  render() {
    if (!this.state.posts.length) {
      return (
        <div>
          <p>Loading</p>
        </div>
      );
    }

    return (
      <div>
        <h1>Blog</h1>
        {this.state.posts.map((item) => {
          return (
            <div key={item.id}>
              <h3>
                <Link
                  to={`/blog/${item.slug}`}
                  dangerouslySetInnerHTML={{ __html: item.title.rendered }}
                />
              </h3>
              <div
                dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
              />
            </div>
          );
        })}
      </div>
    );
  }
}
