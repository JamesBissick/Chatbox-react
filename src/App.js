import React, { Component, createRef } from 'react';

import Form from "./components/Form.js";
import Message from "./components/Message.js";
import base from "./base.js";

import './App.css';

class App extends Component {
  state = {
    messages: {},
    username: this.props.match.params.user
  }

  messagesRef = createRef();

  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const ref = this.messagesRef.current;
    ref.scrollTop = ref.scrollHeight;
  }

  addMessage = message => {
    const messages = { ...this.state.messages };
    messages[`message-${Date.now()}`] = message;
    /* Removes messages older than the 10 newest ones */
    Object.keys(messages).slice(0, -10).forEach(key => {
      messages[key] = null;
    });
    this.setState({ messages });
  }

  render() {
    const messages = Object.keys(this.state.messages).map(key => (
        <Message key={ key } username={ this.state.messages[key].username } message={ this.state.messages[key].message } />
    ));

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={ this.messagesRef }>
            <div className="message">{ messages }</div>
          </div>
        </div>
        <Form username={this.state.username} addMessage={ this.addMessage } length={140} />
      </div>
    )
  }
}

export default App;
