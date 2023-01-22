import React, { Component } from 'react'
import { connect } from 'react-redux'
class Posts extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <h3 key={post.id}> {post.title} </h3>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Posts);