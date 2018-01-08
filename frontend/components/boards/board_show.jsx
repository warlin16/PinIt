import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      deleteButton: false,
    }
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
    // window.onscroll = () => this.toggleScroll();
  }

  toggleScroll() {
    // console.log(document.documentElement.scrollTop);
  }

  handleButton(e) {
    e.preventDefault();
    console.log('Im working bro lol');
  }

  render() {
    const board = this.props.board ?
    this.props.board : {title: '', description: ''};
    return(
        <div className='board-show-content'>
          <div className='edit-bar animated fadeIn'>
            <div><img src={window.staticImages.edit} /></div>
            <button onClick={this.handleButton}>Organize</button>
          </div>
        </div>
    );
  }
}





export default BoardShow;
