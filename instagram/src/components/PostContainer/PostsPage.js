import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
// import './PostsPage.css';

// eslint-disable-next-line react/prefer-stateless-function
class PostsPage extends React.Component {
  render() {
    const {
      currentFilter, resultNotFound, posts, likedPosts, filterByUsername, addLike, addNewComment,
    } = this.props;

    return (
      <div className="App">
        <SearchBar
          currentFilter={currentFilter}
          resultNotFound={resultNotFound}
          filterByUsername={filterByUsername}
          usernames={posts.map(post => post.username)}
        />
        {posts.map((post, index) => (
          <PostContainer
            likedPosts={likedPosts}
            addLike={addLike}
            postId={index + 1}
            addNewComment={addNewComment}
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

PostsPage.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  resultNotFound: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  likedPosts: PropTypes.arrayOf(PropTypes.number).isRequired,
  filterByUsername: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  addNewComment: PropTypes.func.isRequired,
};

export default PostsPage;
