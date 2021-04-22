import React, {Component} from 'react';
import { Redirect } from "react-router-dom";


class Login extends Component {
  state = {
    username: '',
    goToChat: false
  }

  handleChange = event => {
    const username = event.target.value;
    this.setState({ username });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ goToChat: true });
  }

  render() {
    if (this.state.goToChat) {
      return <Redirect push to={`/Users/${this.state.username}`} />
    }

    return (
      <div className='login-box'>
        <form className='login' onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Username' value={this.state.username} onChange={this.handleChange} required />
          <button type="submit">Go</button>
        </form>
      </div>
    );
  }
}

export default Login;
