import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './public/css/style.scss';

// Components
import Blog from './components/Blog';
import Post from './components/Post';
import Single from './components/Single';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corporis
        porro ratione aperiam blanditiis eaque corrupti aliquid nihil totam,
        omnis quis modi dicta perspiciatis recusandae consequuntur, facere eos
        quo sint.{' '}
      </p>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel libero
        inventore voluptatibus sunt placeat quaerat dolores veniam
        exercitationem enim temporibus iusto delectus quis, consequuntur,
        expedita, voluptatem tempora harum? Repudiandae, expedita?
      </p>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>To contact me please email me..</p>
    </div>
  );
};

const Cat = (props) => {
  console.log(props);

  return (
    <div>
      <h3>{props.match.params.catId}</h3>
      <p>Some info</p>
    </div>
  );
};

const Category = () => {
  return (
    <div>
      <h1>Category</h1>
      <ul>
        <li>
          <Link to="/category/games">Games</Link>
        </li>
        <li>
          <Link to="/category/news">News</Link>
        </li>
        <li>
          <Link to="/category/sports">Sports</Link>
        </li>
      </ul>
      <Route
        exact
        path="/category"
        render={() => {
          return <p>Pick a category</p>;
        }}
      />
      <Route path="/category/:catId" component={Cat} />
    </div>
  );
};

const Header = () => {
  return (
    <header id="header">
      <nav id="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

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
    var endpoint = 'http://tamalweb.com/wp-json/wp/v2/posts?per_page=10';
    fetch(endpoint)
      .then((res) => res.json())
      .then((posts) => this.setState({ posts }))
      // Do something when this fails
      .catch((e) => null);
  }

  getTheSinglePost(slug) {
    var apiEndpoint = 'http://tamalweb.com/wp-json/wp/v2/posts';
    var post = this.state.posts.filter((post) => {
      return post.slug === slug;
    });

    return post;

    // if (!post.length) {
    //   console.log('The post is not in the array.');
    //   // Do some fetching for the single post with slug

    //   fetch(`${apiEndpoint}?slug=${slug}`)
    //     .then((res) => res.json())
    //     .then((post) => {
    //       console.log('Logging the post from fetch', post);
    //       return post;
    //     });
    // } else {
    //   console.log('Logging the post from state', post);
    //   return post;
    // }
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
