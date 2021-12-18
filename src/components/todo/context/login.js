import React from 'react';
import {When} from 'react-if';
import { LoginContext } from '../context/loginContext';

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <div className='box'>
        <When condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </When>

        <When condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1><br/>
            <label>Username</label><br/><br/>
            <input
              className="text"
              name="username"
              onChange={this.handleChange}
            /><br/><br/>
            <label>Password</label><br/><br/>
            <input
              className="text"
              name="password"
              onChange={this.handleChange}
            /><br/><br/>
            <button className='button'>Login</button>
          </form>
        </When>
      </div>
    );
  }
}

export default Login;