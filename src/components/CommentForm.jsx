import React from 'react';

class CommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      author: '',
      text: ''
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleAuthorChange(event) {
    this.setState({
      author: event.target.value
    });
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      // <div>
      //   <h1>{this.state.data}</h1>
      //   <input onChange={this.handleChange} />
      // </div>
      <form>
        <h1>{this.state.author}</h1>
        <input type="text" placeholder="" onChange={this.handleAuthorChange} />
        <h1>{this.state.text}</h1>
        <input type="text" placeholder="" onChange={this.handleTextChange} />
        <input type="submit" value="post" />
      </form>
    );
  }
}

export default CommentForm;
