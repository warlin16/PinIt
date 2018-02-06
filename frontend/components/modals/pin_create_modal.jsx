import React from "react";
import { withRouter } from "react-router-dom";

class PinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      imageFile: null,
      imageUrl: null,
      author_id: this.props.currentUserId
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  toggleModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[author_id]", this.state.author_id);
    this.props.match.params.boardId
      ? formData.append("pin[board_id]", this.props.match.params.boardId)
      : null;
    if (this.state.imageFile)
      formData.append("pin[image]", this.state.imageFile);
    this.props.createPin(formData).then(() => {
      this.props.closeModal();
    });
  }

  previewAttachment() {
    if (this.state.imageUrl) {
      return (
        <div className="pin-image-preview">
          Image Preview
          <img src={this.state.imageUrl} alt="Image Preview" />
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="create-pin-container" onClick={this.props.closeModal}>
        <div
          className="pin-form-container animated fadeIn"
          onClick={this.props.stopPropagation}
        >
          <form className="pin-form" onSubmit={this.handleSubmit}>
            <div className="pin-form-title">
              <div className="pin-title">
                <h1> Create A Pin </h1>
              </div>
              <div className="pin-close-button">
                <button onClick={this.toggleModal}>X</button>
              </div>
            </div>

            <div className="pin-form-body">
              <div className="pin-file-box">
                <div>
                  <label>
                    Click to pin img!
                    <input type="file" onChange={this.updateFile} />
                  </label>

                  <img src={window.staticImages.camera} />
                </div>
              </div>

              <div className="pin-input-box">
                <div className="pin-input-title">
                  <h3>Title</h3>
                  <input
                    type="text"
                    placeholder="Pin a title"
                    onChange={this.update("title")}
                  />
                </div>

                <div className="pin-input-description">
                  <h3>Description</h3>
                  <textarea
                    placeholder="Pin a description"
                    onChange={this.update("description")}
                  />
                </div>
                {this.previewAttachment()}
              </div>
            </div>

            <div className="pin-form-submit">
              <button> Pin It! :) </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(PinForm);
