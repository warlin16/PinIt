import React from 'react';
import UserPinItem from '../users/user_pin_item';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPins();
  }

  render() {
    const pins = this.props.pins.map(pin => <UserPinItem
    key={pin.id} id={pin.id} title={pin.title}
    description={pin.description} url={pin.img} />);
    return(
      <div className='show-container'>
        <section className='user-content-box'>
            <div className='user-content'>
              {pins}
            </div>
        </section>
      </div>
    );
  }
}

export default PinIndex;
