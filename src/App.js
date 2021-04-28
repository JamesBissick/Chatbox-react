import React, { Component } from 'react';

import Form from "./components/Form.js";
import Message from "./components/Message.js";
import base from "./base.js";

import './App.css';

class App extends Component {
  state = {
    messages: {},
    username: this.props.match.params.user
  }

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    });
  }

  addMessage = message => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    this.setState({ messages });
  }

  render() {
    const messages = Object.keys(this.state.messages).map(key => (
        <Message key={ key } username={ this.state.messages[key].username } message={ this.state.messages[key].message } />
    ))


    return (
      <div className='box'>
        <div>
          <div className="messages">
            <div className="message">{ messages }</div>
          </div>
        </div>
        <Form username={this.state.username} addMessage={ this.addMessage } length={140} />
      </div>
    )
  }
}

export default App;
