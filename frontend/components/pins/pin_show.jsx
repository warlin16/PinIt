import React from 'react';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
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
          </div>
        </div>
      </section>
    );
  }
}

export default PinShow;
