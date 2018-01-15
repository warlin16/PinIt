import React from 'react';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleGoBack = this.handleGoBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId);
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  handlePinIt(e) {
    e.preventDefault();
  }

  renderEditTools() {
    if (this.props.pin &&
      (this.props.pin.author_id === this.props.currentUser.id)) {
      return (
        <h1>I am the father!</h1>
      );
    } else {
      return null;
    }
  }

  render() {
    const pin = this.props.pin ? this.props.pin : {};
    return(
      <section className='pin-show-container' onClick={this.handleGoBack}>
        <div className='pin-content-box' onClick={this.stopPropagation}>
          <div className='pin-content'>
            <nav className='pin-save-icon'>
              <button className='pin-save-button' onClick={this.handlePinIt}>
                <img src={window.staticImages.dart} />
                Pin it!
              </button>
            </nav>

            <div className='pin-show-column'>

              <div className='pin-image-show'>
                <img src={pin.img} />
              </div>

              <div className='pin-show-info'>
                <div>
                  <h1> {pin.title} </h1>
                </div>
                <div>
                  <h1> {pin.description} </h1>
                </div>
                <div>
                  <h1> Created by: <Link to={`/user/${pin.author_id}`}>
                    {pin.author} </Link></h1>
                </div>
              </div>

            </div>
            {this.renderEditTools()}
          </div>
        </div>
      </section>
    );
  }
}

export default PinShow;
