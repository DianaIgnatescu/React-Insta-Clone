import React, { Component } from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [...dummyData],
      currentUser: 'Holly Wood',
      likedPosts: [],
    };
    this.addNewComment = this.addNewComment.bind(this);
    this.addLike = this.addLike.bind(this);
    this.filterByUsername = this.filterByUsername.bind(this);
  }


  componentDidMount() {
    this.setState({ posts: [...dummyData] });
  }

  addNewComment(postId, comment) {
    const { posts, currentUser } = this.state;
    const index = postId - 1;
    const newPosts = [...posts];
    newPosts[index].comments.push({ username: currentUser, text: comment });
    this.setState({ posts: [...newPosts] });
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
    this.setState({ posts: [...newPosts], likedPosts: [...newLikedPosts] });
  }

  filterByUsername(username) {
    const { posts } = this.state;
    const filteredPosts = posts.filter(post => post.username === username);
    this.setState({ posts: [...filteredPosts] });
  }

  render() {
    const { posts, likedPosts } = this.state;
    return (
      <div className="App">
        <SearchBar filterByUsername={this.filterByUsername} />
        {posts.map((post, index) => (
          <PostContainer
            likedPosts={likedPosts}
            addLike={this.addLike}
            postId={index + 1}
            addNewComment={this.addNewComment}
            key={post.timestamp}
            comments={post.comments}
            username={post.username}
            likes={post.likes}
            imageUrl={post.imageUrl}
            timestamp={post.timestamp}
            thumbnailUrl={post.thumbnailUrl}
          />
        ))}
      </div>
    );
  }
}

export default App;
