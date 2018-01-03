import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <span>Already a member? <Link to="/login">Log In</Link></span>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className={`${this.props.formType}-errors`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const _class = this.props.formType;
    return (
      <div className={`${_class}-form-container`}>
        <form onSubmit={this.handleSubmit} className={`${_class}-form-box`}>
          {this.renderErrors()}
          <div className={`${_class}-form`}>
            <label className={`${_class}-user`}>
              <input type="text"
                placeholder="Create Username"
                value={this.state.username}
                onChange={this.update('username')}
                className={`${_class}-input`}
                onClick={() => this.setState({ username: ''})}
              />
            </label>
            <label className={`${_class}-password`}>
              <input type="password"
                placeholder="Create Password"
                value={this.state.password}
                onChange={this.update('password')}
                className={`${_class}-input`}
              />
            </label>
            <input type="submit" value="Submit" className={`${_class}-submit`} />
            <footer className={`${_class}-bottom`}>{this.navLink()}</footer>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
