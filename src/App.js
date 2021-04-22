import React, { Component } from 'react';

import Form from "./components/Form.js";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='box'>
        <div>
          <div className="messages">Message</div>
        </div>
        <Form />
      </div>
    )
  }
}

export default App;
