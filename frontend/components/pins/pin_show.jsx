import React from "react";
import { Link } from "react-router-dom";
import MDSpinner from "react-md-spinner";

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false
    };

    this.handleGoBack = this.handleGoBack.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId).then(() => {
      this.setState({ loading: false });
    });
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
    if (
      this.props.pin &&
      this.props.pin.author_id === this.props.currentUser.id
    ) {
      return (
        <img
          src={window.staticImages.edit}
          onClick={this.toggleDropdown}
          className="pin-edit"
        />
      );
    } else {
      return null;
    }
  }

  toggleDropdown(e) {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  }

  renderDropwdown() {
    if (this.state.show) {
      return <h1>I SHOULD BE VISIBLE</h1>;
    } else {
      return null;
    }
  }

  render() {
    if (this.state.loading) return <MDSpinner size={100} className="loader" />;
    const pin = this.props.pin ? this.props.pin : {};
    return (
      <section className="pin-show-container" onClick={this.handleGoBack}>
        <div className="pin-content-box" onClick={this.stopPropagation}>
          <div className="pin-content">
            <div className="pin-save-icon">
              <img
                src={window.staticImages.edit}
                
              />
              <button className="pin-save-button" onClick={this.handlePinIt}>
                Pin it!
              </button>
            </div>

            <div className="pin-show-column">
              <div className="pin-image-show">
                <img src={pin.img} />
              </div>

              <div className="pin-show-info">
                <div>
                  <h1> {pin.title} </h1>
                </div>
                <div>
                  <h1> {pin.description} </h1>
                </div>
                <div>
                  <h1>
                    {" "}
                    Created by:{" "}
                    <Link to={`/user/${pin.author_id}`}>{pin.author} </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PinShow;
