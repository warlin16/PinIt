import React from "react";

class UpdatePinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      description: this.props.description,
      id: this.props.pinId
    };
    this.handleClose = this.handleClose.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  clearForm() {
    this.setState({ title: "", description: "" });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePin(this.state);
    this.clearForm();
    this.props.closeModal();
  }

  handleClose(e) {
    e.stopPropagation();
    this.props.closeModal();
  }

  render() {
    return (
      <section className="create-board-container" onClick={this.handleClose}>
        <div
          className="board-form-container animated fadeIn"
          onClick={e => e.stopPropagation()}
        >
          <form className="board-form" onSubmit={this.handleSubmit}>
            <div className="board-form-title">
              <h2>Edit This Pin</h2>
              <button onClick={this.props.closeModal}>
                <strong>X</strong>
              </button>
            </div>
            <div className="board-info">
              <h3> Name </h3>
              <input
                onClick={this.clearForm}
                type="text"
                value={this.state.title}
                placeholder={this.props.title}
                className="board-title"
                onChange={this.update("title")}
              />
            </div>
            <div className="board-info">
              <h3> Description </h3>
              <input
                onClick={this.clearForm}
                type="text"
                value={this.state.description}
                placeholder={this.props.description}
                className="board-description"
                onChange={this.update("description")}
              />
            </div>

            <div className="board-submit">
              <button onClick={this.props.deletePinModal} className="board-cancel">
                Delete
              </button>
              <button onClick={this.props.closeModal} className="board-cancel">
                Cancel
              </button>
              <button className="board-submit-button">Save</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default UpdatePinForm;
