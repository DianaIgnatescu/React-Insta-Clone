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
      // comments: [{ postId: 1, username: 'biancasaurus', text: 'hello'}, { postId: 1, username: 'theotherguy', text: 'hello'},
      // { postId: 2, username: 'biancasaurus', text: 'hello'}],
    };
    this.addNewComment = this.addNewComment.bind(this);
  }



  componentDidMount() {
    this.setState({ posts: [...dummyData] });
  }

  addNewComment(postId, comment) {
    const index = postId - 1;
    const newPosts = [...this.state.posts];
    newPosts[index].comments.push({ username: this.state.currentUser, text: comment });
    this.setState({ posts: [...newPosts] });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <SearchBar />
        {posts.map((post, index) => (
          <PostContainer
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
