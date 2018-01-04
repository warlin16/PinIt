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

  componentDidMount() {
    // this.props.clearError();
  }

  componentWillReceiveProps(nextProps) {
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
      return <Link to="/signup" className={`signup-link`}>Sign Up</Link>;
    } else {
      return <Link to="/login" className={`login-link`}>Log In</Link>;
    }
  }

  renderErrors() {
    return(
      <div className={`${this.props.formType}-errors animated fadeIn`}>
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}
              className='animated fadeInLeft'>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const _class = this.props.formType;
    return (
      <div className={`${_class}-background`}>
        {this.renderErrors()}
        <div className={`${_class}-form-container`}>
          {this.navLink()}
          <div className={`${_class}-logo`}>
            <img src={window.staticImages.pinitLogo} />
          </div>
          <div className={`${_class}-greeting`}>
            <h1>{this.props.formGreeting}</h1>
          </div>
          <form onSubmit={this.handleSubmit} className={`${_class}-form-box`}>
            <div className={`${_class}-form`}>
              <label className={`${_class}-user`}>
                <input type="text"
                  placeholder="Create Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className={`${_class}-input`}
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
              <input type="submit" value={`${this.props.submitButton}`} className={`${_class}-submit`} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
