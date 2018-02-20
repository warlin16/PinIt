import React, { Component } from "react";

class PinItForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      title: this.props.title,
      description: this.props.description,
      board_id: null,
      author_id: this.props.user.id,
      imageUrl: this.props.url,
      attachment_id: this.props.attachmentId,
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
    this.handlePropagation = this.handlePropagation.bind(this);
    this.handlePinIt = this.handlePinIt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClose() {
    this.props.closeModal();
  }

  handlePropagation(e) {
    e.stopPropagation();
    if (this.state.edit) this.setState({ edit: false });
  }

  changeEdit(e) {
    e.preventDefault();
    this.setState({
      edit: !this.state.edit
    });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderEdit() {
    if (this.state.edit) {
      return (
        <textarea
          onClick={this.props.stopPropagation}
          onChange={this.update("description")}
        >
          {this.state.description}
        </textarea>
      );
    } else {
      return (
        <div onClick={this.changeEdit} className="pin-it-edit">
          <h3>{this.state.description}</h3>
          <div>
            <img src={window.staticImages.edit} />
          </div>
        </div>
      );
    }
  }

  handlePinIt(e) {
    this.setState({ board_id: e.target.id, show: true });
  }

  doNothing(e) {
    e.preventDefault();
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[author_id]", this.state.author_id);
    formData.append("pin[board_id]", this.state.board_id);
    formData.append("pin[attachment_id]", this.state.attachment_id);
    this.props.createPin(formData).then(() => {
      this.props.closeModal();
    });
  }

  renderSubmit() {
    if (this.state.show) {
      return (
        <button className="pin-save-button" onClick={this.handleSubmit}>
          Submit
        </button>
      );
    } else {
      return (
        <button className="pin-non-submit" onClick={this.doNothing}>
          Submit
        </button>
      );
    }
  }

  render() {
    const boards = this.props.user.boardIds.map((board, idx) => (
      <li
        id={board.id}
        key={idx}
        onClick={this.handlePinIt}
        className="pin-it-board-item"
      >
        {board.title}
      </li>
    ));
    return (
      <section className="pin-it-container" onClick={this.handleClose}>
        <div className="pin-it-box" onClick={this.handlePropagation}>
          <div className="pin-it-image">
            <img src={this.props.url} />
            {this.renderEdit()}
          </div>
          <div className="pin-board-list">
            <header>
              <h3>Choose board</h3>
              <strong onClick={this.handleClose}>X</strong>
            </header>
            <article>
              <div>
                All boards
                {boards}
              </div>
            </article>
            <footer>{this.renderSubmit()}</footer>
          </div>
        </div>
      </section>
    );
  }
}

export default PinItForm;
