import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UpdateBoardForm from '../modals/board_update_modal';

class UserBoardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };
    this.renderEditIcon = this.renderEditIcon.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  renderEditIcon() {
    if (this.state.edit) {
      return(
        <button className='edit-pencil' onClick={this.handleEdit}>
          <img src={window.staticImages.edit}/>
        </button>
      );
    } else {
      return null;
    }
  }

  toggleState() {
    this.setState({edit: !this.state.edit });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push(`/user/${this.props.userId}/board/${this.props.id}`);
    this.props.updateBoardModal();
  }

  render() {
    return(
      <Link to={`/user/${this.props.userId}/board/${this.props.id}`} className='board-show-link'>
        <div className='board-items' onMouseEnter={this.toggleState}
          onMouseLeave={this.toggleState}>
          <div className='board-item-img'>
            <div>{this.props.description}</div>
          </div>

          <div className='board-item-title'>
            <div>{this.props.title}</div>
            <div className='board-update-icon'>
              {this.props.pins} Pins
              {this.renderEditIcon()}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
export default withRouter(UserBoardItem);
