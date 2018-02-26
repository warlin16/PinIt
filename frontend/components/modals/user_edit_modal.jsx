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
      />
    );
  }
}

export default UpdateUserForm;
