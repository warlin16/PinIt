import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    const board = this.props.board ?
    this.props.board : {title: '', description: ''};
    return(
        <div className='board-show-content'>
          <div className='Testing'>
            My name is {board.title}
          </div>
        </div>
    );
  }
}





export default BoardShow;
