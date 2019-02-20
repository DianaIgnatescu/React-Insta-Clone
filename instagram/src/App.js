import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [...dummyData],
      currentUser: 'hollywood91',
      likedPosts: [],
      currentFilter: '',
      resultNotFound: false,
    };
    this.addNewComment = this.addNewComment.bind(this);
    this.addLike = this.addLike.bind(this);
    this.filterByUsername = this.filterByUsername.bind(this);
  }

  componentDidMount() {
    const savedState = localStorage.getItem('savedState');
    if (savedState) {
      const state = JSON.parse(savedState);
      this.setState({ ...state });
    } else {
      this.setState({ posts: [...dummyData] });
    }
  }

  saveToLocalStorage() {
    localStorage.setItem('savedState', JSON.stringify(this.state));
  }

  addNewComment(postId, comment) {
    const { posts, currentUser } = this.state;
    const index = postId - 1;
    const newPosts = [...posts];
    newPosts[index].comments.push({ username: currentUser, text: comment });
    this.setState({ posts: [...newPosts] }, this.saveToLocalStorage);
  }

  addLike(postId) {
    const { posts, likedPosts } = this.state;
    const index = postId - 1;
    const newPosts = [...posts];
    const newLikedPosts = [...likedPosts];
    if (likedPosts.includes(postId)) {
      newPosts[index].likes -= 1;
      newLikedPosts.pop(newLikedPosts.indexOf(postId));
    } else {
      newPosts[index].likes += 1;
      newLikedPosts.push(postId);
    }
    this.setState({ posts: [...newPosts], likedPosts: [...newLikedPosts] },
      this.saveToLocalStorage);
  }

  filterByUsername(username, resultNotFound) {
    const { posts } = this.state;
    const filteredPosts = posts.filter(post => post.username === username);
    this.setState({ posts: [...filteredPosts], currentFilter: username, resultNotFound });
  }

  render() {
    const {
      posts, likedPosts, currentFilter, resultNotFound,
    } = this.state;
    return (
      <PostsPage
        posts={posts}
        likedPosts={likedPosts}
        currentFilter={currentFilter}
        resultNotFound={resultNotFound}
        addLike={this.addLike}
        addNewComment={this.addNewComment}
        filterByUsername={this.filterByUsername}
      />
    );
  }
}

export default App;
