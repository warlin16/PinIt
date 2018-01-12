import React from 'react';
import { Link } from 'react-router-dom';


class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { search: '', dropdown: false };
  }

  handleDropdown(e) {
    e.preventDefault();
    this.setState({ dropdown: !this.state.dropdown });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dropdown: false});
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  handleLogout() {
    this.props.history.push('/');
    this.props.logout();
  }

  dropDown() {
    if (this.state.dropdown) {
      return(
        <div className='dropdown-menu' onMouseLeave={this.handleDropdown}>
          <div className='dropdown-settings'>
            <p>{this.props.currentUser.username}</p>
          </div>

          <section>
            <a href='https://linkedin.com/in/warlin16'>LinkedIn</a>
            <img src={window.staticImages.linked} />
          </section>

          <section>
            <a href='https://github.com/warlin16'>GitHub</a>
            <img src={window.staticImages.git} />
          </section>

          <div className='dropdown-logout' onClick={this.handleLogout}>
            <p>Logout</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  navBar() {
    if (this.props.currentUser) {
      return(
        <nav className='main-nav'>
          <div className='nav-container'>
            <div className='logo-box'>
              <Link to='/' className='logo-link'>
                <img src={window.staticImages.pinitLogo} />
              </Link>
            </div>

            <div className='search-input'>
              <img src={window.staticImages.search} />
              <input
                type='text'
                value={this.state.search}
                onChange={this.update('search')}
                placeholder={`This feature doesn't work yet lol`} />
            </div>

            <div className='home-page'>
              <Link to='/'>Home</Link>
            </div>

            <div className='show-page'>
              <Link to={`/user/${this.props.currentUser.id}`}><img src={this.props.currentUser.avatarUrl} />
              <h1>Show</h1></Link>
            </div>
            <div className='logout'
                onMouseEnter={this.handleDropdown} >
              <img src={window.staticImages.drop} />
            </div>
          </div>
          {this.dropDown()}
        </nav>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div>{this.navBar()}</div>
    );
  }
}


export default Logout;
