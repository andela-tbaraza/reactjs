import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';


class CommentForm extends React.Component {
  constructor() {
    super();

    this.state = {
      author: '',
      text: ''
    };

    this.handleAuthorChange = this.handleAuthorChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    let author = this.state.author.trim();
    let text = this.state.text.trim();
    if (!author || !text) {
      return;
    }

    this.props.onCommentSubmit({ author: author, text: text });
    this.setState({ author: '', text: '' });
  }
  render() {
    return (
      // <div>
      //   <h1>{this.state.data}</h1>
      //   <input onChange={this.handleChange} />
      // </div>
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.author}</h1>
        <input type="text" placeholder="" value={this.state.author} onChange={this.handleAuthorChange} />
        <h1>{this.state.text}</h1>
        <input type="text" placeholder="" value={this.state.text} onChange={this.handleTextChange} />
        <input type="submit" value="Post" />
        {/*<RaisedButton label="Post" />*/}
      </form>
    );
  }
}

export default CommentForm;
