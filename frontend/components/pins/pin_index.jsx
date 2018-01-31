import React from 'react';
import UserPinItem from '../users/user_pin_item';
import MDSpinner from 'react-md-spinner';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.props.fetchPins().then(() => {
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.props.clearPins();
  }

  render() {
    if (this.state.loading) return <MDSpinner className='loader' size={100} />;
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
