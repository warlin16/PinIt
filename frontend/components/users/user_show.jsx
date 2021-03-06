import React from "react";
import { Link } from "react-router-dom";
import UserBoardItem from "./user_board_item";
import UserPinItem from "./user_pin_item";
import BoardForm from "../modals/board_create_modal";
import PinForm from "../modals/pin_create_modal";
import UpdateUserForm from "../modals/user_edit_modal";
import MDSpinner from "react-md-spinner";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
    this.createBoard = this.createBoard.bind(this);
    this.createPin = this.createPin.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.boardIndex = this.boardIndex.bind(this);
    this.pinIndex = this.pinIndex.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId).then(() => {
      this.setState({ loading: false });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
    if (this.props.match.url !== nextProps.match.url) {
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    window.scrollTo(0, 0);
    this.props.clearPins();
  }

  createBoard() {
    this.props.createBoardModal();
  }

  closeModal() {
    this.props.closeModal();
  }

  createPin() {
    this.props.createPinModal();
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  renderPinCreate() {
    if (this.props.pinModal === "create") {
      return (
        <PinForm
          closeModal={this.closeModal}
          stopPropagation={this.stopPropagation}
          currentUserId={this.props.currentUser.id}
          createPin={this.props.createPin}
        />
      );
    }
  }

  renderBoardCreate() {
    if (this.props.boardModal === "create") {
      return (
        <BoardForm
          closeModal={this.closeModal}
          stopPropagation={this.stopPropagation}
          createBoard={this.props.createBoard}
          currentUserId={this.props.currentUser.id}
        />
      );
    }
  }

  createBoardForm() {
    if (!this.props.user) return null;
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <div className="board-create" onClick={this.createBoard}>
          <div className="board-create-button">
            <div>+</div>
          </div>

          <div className="board-create-title">
            <div>Create A Board!</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  createPinForm() {
    if (!this.props.user) return null;
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <div className="pin-create" onClick={this.createPin}>
          <div className="pin-create-button">
            <div>+</div>
          </div>

          <div className="pin-create-title">
            <div>Create A Pin!</div>
          </div>
        </div>
      );
    }
  }

  boardIndex() {
    if (
      this.props.user &&
      this.props.match.url === `/user/${this.props.user.id}`
    ) {
      return (
        <Link
          to={`/user/${this.props.user.id}`}
          className="user-board-link styled"
        >
          <p>Boards</p>
        </Link>
      );
    } else if (this.props.user) {
      return (
        <Link to={`/user/${this.props.user.id}`} className="user-board-link">
          <p>Boards</p>
        </Link>
      );
    } else {
      return null;
    }
  }

  pinIndex() {
    if (
      this.props.user &&
      this.props.match.url === `/user/${this.props.user.id}/pins`
    ) {
      return (
        <div className="user-pins-index">
          <Link
            to={`/user/${this.props.user.id}/pins`}
            className="user-pins-link styled"
          >
            <p>Pins</p>
          </Link>
          <div className="user-pin-amount">
            {this.props.user.pinIds.length} pins
          </div>
        </div>
      );
    } else if (this.props.user) {
      return (
        <Link
          to={`/user/${this.props.user.id}/pins`}
          className="user-pins-link"
        >
          <p>Pins</p>
        </Link>
      );
    } else {
      return null;
    }
  }

  renderBoards(boards) {
    if (
      this.props.user &&
      this.props.match.url === `/user/${this.props.user.id}`
    ) {
      return (
        <div className="user-content">
          {this.renderBoardCreate()}
          {this.createBoardForm()}
          {boards}
        </div>
      );
    } else if (this.props.user) {
      return null;
    } else {
      return null;
    }
  }

  renderPins(pins) {
    if (
      this.props.user &&
      this.props.match.url === `/user/${this.props.user.id}/pins`
    ) {
      return (
        <div className="user-content">
          {this.renderPinCreate()}
          {this.createPinForm()}
          {pins}
        </div>
      );
    } else if (this.props.user) {
      return null;
    } else {
      return null;
    }
  }

  renderUserEdit() {
    if (this.props.userModal === "update") {
      return (
        <UpdateUserForm
          id={this.props.user.id}
          closeModal={this.closeModal}
          stopPropagation={this.stopPropagation}
          updateUserProfile={this.props.updateUserProfile}
        />
      );
    } else {
      return null;
    }
  }

  userImg() {
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <img
          src={this.props.user ? this.props.user.avatarUrl : ""}
          onClick={this.props.userEdit}
          className="user-img-edit"
        />
      );
    } else {
      return <img src={this.props.user ? this.props.user.avatarUrl : ""} />;
    }
  }

  render() {
    if (this.state.loading) return <MDSpinner size={100} className="loader" />;
    const user = this.props.user ? this.props.user : { username: "", id: "" };
    const boards = this.props.boards.map(board => (
      <UserBoardItem
        key={board.id}
        id={board.id}
        title={board.title}
        description={board.description}
        pins={board.pins}
        userId={user.id}
        boardModal={this.props.boardModal}
        updateBoardModal={this.props.updateBoardModal}
      />
    ));
    const pins = this.props.pins.map(pin => (
      <UserPinItem
        key={pin.id}
        id={pin.id}
        title={pin.title}
        description={pin.description}
        url={pin.img}
      />
    ));
    return (
      <div className="show-container">
        <div className="user-bio-box">
          <div className="user-bio">
            <div className="user-info">
              <div className="user-name">
                <h3>{user.username}</h3>
              </div>

              <div className="follows">
                <div className="followers">
                  <div>0</div>
                  <div>followers</div>
                </div>
                <div className="following">
                  <div>0</div>
                  <div>following</div>
                </div>
              </div>
            </div>

            <div className="user-img">
              {this.userImg()}
              <div />
            </div>
          </div>

          <div className="content-selector">
            {this.boardIndex()}
            {this.pinIndex()}
          </div>
        </div>

        <section className="user-content-box">
          {this.renderBoards(boards)}
          {this.renderPins(pins)}
        </section>
        {this.renderUserEdit()}
      </div>
    );
  }
}

export default UserShow;
