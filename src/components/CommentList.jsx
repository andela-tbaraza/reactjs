import React from 'react';

// let data = [
//   { id: 1, author: 'Pete Hunt', refr: 'jhjj', text: 'This is one comment' },
//   { id: 2, author: 'Jordan Walke', refr: 'bhhbu', text: 'This is *another* comment' },
//   { id: 3, author: 'Tonida Baraza', refr: 'ogcfx', text: 'I got it now' }
// ];

class CommentList extends React.Component {

  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.kind} key={comment.id}>
        {comment.selfLink}
        </Comment>
      );
    });
    return (
      <div>
        {commentNodes}
      </div>

    );
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div>
        <h1>Kind: {this.props.author}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default CommentList;
