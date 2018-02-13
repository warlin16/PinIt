import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class DeletePinForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .deleteBoard(this.props.boardId)
      .then(() => {
        this.props.closeModal();
      })
      .then(() => {
        this.props.history.push(`/user/${this.props.userId}`);
      });
  }

  render() {
    return (
      <div className="board-delete-container" onClick={this.props.closeModal}>
        <div
          className="board-delete-box animated fadeIn"
          onClick={this.props.stopPropagation}
        >
          <div className="board-delete-title">
            <h1> Don't do it... </h1>
            <strong onClick={this.props.closeModal}>X</strong>
          </div>
          <div className="board-delete-content">
            <p>
              This pin will miss you when it's gone
            </p>
          </div>
          <div className="board-delete-buttons">
            <button className="delete-cancel" onClick={this.props.closeModal}>
              Cancel
            </button>
            <button className="delete-submit" onClick={this.handleSubmit}>
              Delete :(
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(DeletePinForm);
