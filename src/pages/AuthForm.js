import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';
import styles from './pages.module.css';

const initialState = {
  email: '',
  password: '',
};

class AuthForm extends Component {
  state = {
    ...initialState,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onLogin, onRegister } = this.props;
    const URL = this.props.match.url;
    URL === '/register' && onRegister(this.state);
    URL === '/login' && onLogin(this.state);
    this.setState(initialState);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Email:
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <label className={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={styles.input}
            />
          </label>
          <button type="submit" className="btn">
            {this.props.location.pathname === '/register'
              ? 'Register'
              : 'Sign In'}
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
  onLogin: authOperations.logIn,
};
export default connect(null, mapDispatchToProps)(AuthForm);
