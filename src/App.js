import React, { Component, createRef } from 'react';

import Form from './components/Form.js';
import Message from './components/Message.js';
import base from './base.js';

import './App.css';
import './animations.css';

// Animations
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

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

  isUser = (username) => username === this.state.username;

  render() {
    const messages = Object.keys(this.state.messages).map(key => (
      <CSSTransition key={ key } classNames='fade' timeout={ 250 }>
        <Message isUser={this.isUser} username={ this.state.messages[key].username } message={ this.state.messages[key].message } />
      </CSSTransition>
    ));

    return (
      <div className='box'>
        <div>
          <div className="messages" ref={ this.messagesRef }>
            <TransitionGroup className="message">{ messages }</TransitionGroup>
          </div>
        </div>
        <Form username={this.state.username} addMessage={ this.addMessage } length={140} />
      </div>
    )
  }
}

export default App;
