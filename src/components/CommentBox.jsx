import React, { Component } from 'react';
import ReactDom from 'react-dom';
import request from 'superagent';
import $ from 'jquery';

import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

class CommentBox extends Component {

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        console.log(data)
        this.setState({
          data: data.items
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  handleCommentSubmit(comment) {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function (data) {
        this.setState({ data: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    setInterval(this.loadCommentsFromServer(), 2000);
  }

  render() {
    return (
      <div>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}

export default CommentBox;
