import React from 'react';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId);
  }


  render() {
    const pin = this.props.pin ? this.props.pin : {};
    return(
      <section className='pin-show-container'>
        <div className='pin-content-box'>
          <div className='pin-content'>
            <nav className='pin-save-icon'>
              <button className='pin-save-button'>
                <img src={window.staticImages.dart} />
                Pin it!
              </button>
            </nav>

            <div className='pin-show-column'>

              <div className='pin-image-show'>
                <img src={pin.img} />
              </div>

              <div className='pin-show-info'>
                <h1> {pin.title} </h1>
                <h1> {pin.description} </h1>
                <h1> Created by: {pin.author} </h1>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PinShow;
