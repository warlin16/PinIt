import React, { Component } from "react";

class UpdateUserForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section
        className="create-board-container"
        onClick={this.props.closeModal}
      >
        <div
          className="board-form-container animated fadeIn"
          onClick={this.props.stopPropagation}
        >
          <div className="pin-file-box">
            <div>
              <label>
                Click to edit profile img!
                <input type="file" onChange={this.updateFile} />
              </label>

              <img src={window.staticImages.camera} />
            </div>
          </div>
          <div className="pin-form-submit">
            <button>Submit</button>
          </div>
        </div>
      </section>
    );
  }
}

export default UpdateUserForm;
