import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user ? this.props.user : { username: '' };
    return(
      <div className='show-container'>
        <div className='user-bio-box'>
          <div className='user-bio'>
            <div className='user-info'>
              <div className='user-name'><h3>{user.username}</h3></div>

              <div className='follows'>
                <div className='followers'>
                  <div>0</div>
                    <div>followers</div>
                  </div>
                <div className='following'>
                  <div>0</div>
                    <div>following</div>
                  </div>
              </div>
            </div>

            <div className='user-img'>
              <div><img src={window.staticImages.tempLogo} /></div>
            </div>
          </div>

          <div className='content-selector'>
            <Link to='/'>BACK TO FEED</Link>
            <button>BOARDS</button>
            <button>PINS</button>
          </div>

        </div>

          <section className='user-content-box'>
            <div className='user-content'>
              <div>
                <h1>
                  And they said I couldn't be a div... Fools!
                </h1>
              </div>

              <div>
                <h1>
                  testing 😅
                </h1>
              </div>

              <div>
                <h1>
                  IN A DIV 😎
                </h1>
              </div>

              <div>
                <h1>
                  IN A DIV 😎
                </h1>
              </div>

              <div>
                <h1>
                  IN A DIV 😎
                </h1>
              </div>

              <div>
                <h1>
                  I should be on the second row lol
                </h1>
              </div>
            </div>
          </section>

      </div>
    );
  }
}

export default UserShow;
