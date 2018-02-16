import React from "react";
import { Link } from "react-router-dom";
import MDSpinner from "react-md-spinner";
import UpdatePinForm from "../modals/pin_update_modal";
import DeletePinForm from "../modals/pin_delete_modal";

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      show: false
    };

    this.handleGoBack = this.handleGoBack.bind(this);
    this.editPin = this.editPin.bind(this);
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

  editPin() {
    this.props.editPin();
  }

  renderUpdateForm() {
    if (this.props.pinModal === "update") {
      return (
        <UpdatePinForm
          closeModal={this.props.closeModal}
          pinId={this.props.pin.id}
          title={this.props.pin.title}
          description={this.props.pin.description}
          updatePin={this.props.updatePin}
          deletePinModal={this.props.deletePinModal}
        />
      );
    }
  }

  renderDeleteForm() {
    if (this.props.pinModal === "delete") {
      return (
        <DeletePinForm
          closeModal={this.props.closeModal}
          pinId={this.props.pin.id}
          deletePin={this.props.deletePin}
          userId={this.props.currentUser.id}
        />
      );
    }
  }

  renderEditTools() {
    if (
      this.props.pin &&
      this.props.pin.author_id === this.props.currentUser.id
    ) {
      return <img src={window.staticImages.edit} onClick={this.editPin} />;
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
              {this.renderEditTools()}
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
                  <img src={pin.authorAvi} />
                  <h1>
                    Created by:{" "}
                    <Link to={`/user/${pin.author_id}`}>{pin.author} </Link>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.renderUpdateForm()}
        {this.renderDeleteForm()}
      </section>
    );
  }
}

export default PinShow;
