import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import config from './config';
import './public/css/style.scss';

// Components
import Header from './components/Header';
import Single from './components/Single';

// Static Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

// Dynamic pages
import Blog from './components/Blog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      currentPost: []
    };
    this.fetchAndStorePosts = this.fetchAndStorePosts.bind(this);
    this.getTheSinglePost = this.getTheSinglePost.bind(this);
  }

  fetchAndStorePosts() {
    fetch(config.endpoint)
      .then((res) => res.json())
      .then((posts) => this.setState({ posts }))
      // Do something when this fails
      .catch((e) => null);
  }

  getTheSinglePost(slug) {
    var post = this.state.posts.filter((post) => {
      return post.slug === slug;
    });
    if (!post.length) {
      var posts = [...this.state.posts];
      fetch(`${config.endpoint}?slug=${slug}`)
        .then((res) => res.json())
        .then((post) => {
          posts = [...post];
          this.setState({ posts });
        });
    }
    return post;
  }

  render() {
    return (
      <Router>
        <div id="layout">
          <Header />
          <main id="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              exact
              path="/blog"
              render={() => (
                <Blog
                  posts={this.state.posts}
                  fetchAndStorePosts={this.fetchAndStorePosts}
                />
              )}
            />
            <Route
              exact
              path="/blog/:slug"
              render={(props) => (
                <Single {...props} getTheSinglePost={this.getTheSinglePost} />
              )}
            />
          </main>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('app'));
