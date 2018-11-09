# React and React Router Related Snippets

Some react related snippets which I came across while building.

## Issue: when I visit a page, the page does not scrolls to the top

fix: Add this to the componentDidMount() on that page,

`componentDidMount() { window.scrollTo(0, 0); }`

## Issue: How to parse HTML?

The endpoint gives html markup, so I need to make them pretty (parse) them. I used it like this:

`<h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />`

This outputs: `<h1>{the title}</h1>`

Have to read on about dangerouslySetInnerHTML and how to properly handle it.

## Isseu: Sending the match, history etc props when using render in Route

`<Route render={(props) => (<Single {...props}} />)} />`

## Getting the post slug, then using the slug to find out the whole post from the state and then rendering it

So when the first time I fetch the 10 posts, I get their title, content and everything. No need to fetch them again when looking for single post. So I did this:

````getTheSinglePost(slug) {
    var post = this.state.posts.filter((post) => {







      return post.slug === slug;







    });







    return post;







  }```







````
