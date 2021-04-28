import React, {Component} from 'react';

class Form extends Component {
  state = {
    message: '',
    length: this.props.length
  }

  createMessage = () => {
    const { addMessage, username, length } = this.props;
    const message = {
      username,
      message: this.state.message
    }

    addMessage(message);

    // Reset
    this.setState({ message: '', length });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.createMessage();
  }

  handleChange = event => {
    const message = event.target.value;
    const length = this.props.length - message.length;
    this.setState({ message, length });
  }

  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.createMessage();
    }
  }

  render() {
    return (
      <form className='form' onSubmit={this.handleSubmit}>
        <textarea value={this.state.message} onKeyUp={this.handleKeyUp} onChange={this.handleChange} maxLength={this.props.length} required />
        <div className="info">{ this.state.length }</div>
        <button type="submit">Send!</button>
      </form>
    );
  }
}

export default Form;
