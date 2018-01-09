import React from 'react';
import { Link } from 'react-router-dom';


class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { search: '' };
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
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
              <h1>{this.props.currentUser.username}</h1></Link>
            </div>

            <button onClick={this.handleLogout }className='logout'>Logout</button>
          </div>
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
