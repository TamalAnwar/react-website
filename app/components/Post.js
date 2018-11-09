import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: []
    };
  }

  componentDidMount() {
    var slug = this.props.match.params.slug;
    var endpoint = `http://tamalweb.com/wp-json/wp/v2/posts/?slug=${slug}`;

    fetch(endpoint)
      .then((res) => res.json())
      .then((post) => {
        this.setState({ post });
      });
  }

  render() {
    if (!this.state.post.length) {
      return <div>Loading</div>;
    }
    var item = this.state.post[0];
    return (
      <div>
        <h1 dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

        <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
      </div>
    );
  }
}
