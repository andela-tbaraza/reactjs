import React from 'react';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      data: 'single'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      data: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.data}</h1>
        <input onChange={this.handleChange} />
      </div>
    );
  }
}

export default Main;
