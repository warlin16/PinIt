import React from "react";
import { Link } from "react-router-dom";

class Logout extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.state = { search: "", dropdown: false };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dropdown: false });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleLogout() {
    this.props.history.push("/");
    this.props.logout();
  }

  dropDown() {
    if (this.state.dropdown) {
      return (
        <div
          className="dropdown-menu"
          onMouseLeave={() => this.setState({ dropdown: false })}
        >
          <div className="dropdown-settings">
            <Link to={`/user/${this.props.currentUser.id}`}>
              {this.props.currentUser.username}
            </Link>
          </div>

          <section>
            <a href="https://linkedin.com/in/warlin16">LinkedIn</a>
            <img src={window.staticImages.linked} />
          </section>

          <section>
            <a href="https://github.com/warlin16">GitHub</a>
            <img src={window.staticImages.git} />
          </section>

          <div className="dropdown-logout" onClick={this.handleLogout}>
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
      return (
        <nav className="main-nav">
          <div className="nav-container">
            <div className="logo-box">
              <Link to="/" className="logo-link">
                <img src={window.staticImages.pinitLogo} />
              </Link>
            </div>

            <div className="search-input" />

            <div className="home-page">
              <Link to="/">Home</Link>
            </div>

            <div
              className="logout"
              onMouseEnter={() => this.setState({ dropdown: true })}
            >
              <img src={this.props.currentUser.avatarUrl} />
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
    if (this.props.location.pathname.slice(0, 5) === "/pin/") return null;
    return <div>{this.navBar()}</div>;
  }
}

export default Logout;
