import React from "react";
import UserPinItem from "../users/user_pin_item";
import MDSpinner from "react-md-spinner";
import Waypoint from "react-waypoint";


class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      page: 1
    }

    this.getPins = this.getPins.bind(this);
  }

  componentDidMount() {
    this.getPins();
  }

  componentWillUnmount() {
    this.props.clearPins();
  }

  getPins() {
    this.props.fetchPins(this.state.page).then(() => {
      this.setState({ loading: false, page: this.state.page + 1});
    });
  }

  render() {
    if (this.state.loading) return <MDSpinner className='loader' size={100} />;
    const pins = this.props.pins.map(pin => <UserPinItem
    key={pin.id} id={pin.id} title={pin.title}
    description={pin.description} url={pin.img} />).reverse();
    return(
      <div className='show-container'>
        <section className='user-content-box'>
            <div className='user-content'>
              {pins}
              <Waypoint onEnter={this.getPins} />
            </div>
        </section>
      </div>
    );
  }
}

export default PinIndex;
