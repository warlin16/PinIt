import React, { Component } from "react";

class PinItForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      title: this.props.title,
      description: this.props.description,
      board_id: null
    };
    this.handleClose = this.handleClose.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
    this.handlePropagation = this.handlePropagation.bind(this);
    this.handlePinIt = this.handlePinIt.bind(this);
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
    this.setState({ board_id: e.target.id });
  }

  render() {
    const boards = this.props.user.boardIds.map((board, idx) => (
      <div id={board.id} key={idx} onClick={this.handlePinIt}>
        {board.title}
      </div>
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
          </div>
        </div>
      </section>
    );
  }
}

export default PinItForm;
