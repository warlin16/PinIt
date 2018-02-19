import React, { Component } from "react";

class PinItForm extends Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.closeModal();
  }

  render() {
    return (
      <section className="board-delete-container" onClick={this.handleClose}>
        <div className="pin-it-box" onClick={this.props.stopPropagation}>
          <div className="pin-it-content">
            testing testing testing...
          </div>
        </div>
      </section>
    );
  }
}

export default PinItForm;
