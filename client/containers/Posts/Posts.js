import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { fetchPosts } from 'actions';
import styles from './styles.css';

class Posts extends Component {
  static propTypes = {
    showError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    fetchPosts: PropTypes.func.isRequired,
  };
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts, showError, errorMessage } = this.props;
    return (
			<div className={styles.container}>
				<img src="http://www.simplytechnologies.net/img/logo.png" />
				<h1>Welcome</h1>
				<div>
		      <Link to="/">Home</Link>
				</div>
			</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.posts,
    showError: state.posts.showError,
    errorMessage: state.posts.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: bindActionCreators(fetchPosts, dispatch),
  };
}

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
