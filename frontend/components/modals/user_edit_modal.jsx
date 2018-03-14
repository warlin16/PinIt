import React, { Component } from "react";

class UpdateUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      imageFile: null,
      imageUrl: null
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    formData.append("user[id]", this.state.id);
    formData.append(
      "user[attachment_attributes][avatar]",
      this.state.imageFile
    );
    this.props.updateUserProfile(formData, this.state.id).then(() => {
      this.props.closeModal();
    });
  }

  render() {
    return (
      <section
        className="create-board-container"
        onClick={this.props.closeModal}
      >
        <form
          className="user-edit-container animated fadeIn"
          onClick={this.props.stopPropagation}
          onSubmit={this.handleSubmit}
        >
          <div className="pin-file-box">
            <div>
              <label>
                Edit profile img!
                <input type="file" onChange={this.updateFile} />
              </label>

              <img src={window.staticImages.camera} />
            </div>
          </div>
          <div className="pin-form-submit">
            <button>Submit</button>
          </div>
        </form>
      </section>
    );
  }
}

export default UpdateUserForm;
