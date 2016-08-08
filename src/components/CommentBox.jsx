import React, { Component } from 'react';
import ReactDom from 'react-dom';
import request from 'superagent';

import CommentForm from './CommentForm.jsx';
import CommentList from './CommentList.jsx';

class CommentBox extends Component {


  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    request
      .get(this.props.url)
      .end((err, res) => {
        console.log(res.body);
        this.setState({
          data: res.body.items
        });
      });
    // this.ajax({
    //   url: this.props.url,
    //   datatype: json,
    //   cache: false,
    //   success: function (data) {
    //     this.setState({
    //       data: data
    //     });
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // })
  }

  render() {
    return (
      <div>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
