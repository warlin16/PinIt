import React from 'react';

class PinForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      imageFile: null,
      imageUrl: null
    };

    debugger
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    }

    if (file) {
      fileReader.readAsDataUrl(file);
    }
  }

  handleSubmit(e) {

  }

  render() {
    return(
      <div className='create-pin-container' onClick={this.props.closeModal}>
        <div className='pin-form-container animated fadeIn' onClick={this.props.stopPropagation}>
          <form className='pin-form'>
            <div className='pin-form-title'>
              <div className='pin-title'><h1> Create A Pin </h1></div>
              <div className='pin-close-button'><button onClick={this.toggleModal}>X</button></div>
            </div>

            <div className='pin-form-body'>
              <div className='pin-file-box'>
                <div>
                  <label>Click to pin img!
                    <input type='file' />
                  </label>
                  <img src={window.staticImages.camera} />
                </div>
              </div>

              <div className='pin-input-box'>
                <div className='pin-input-title'>
                  <h3>Title</h3>
                  <input type='text' placeholder='Pin a title' />
                </div>

                <div className='pin-input-description'>
                  <h3>Description</h3>
                  <textarea placeholder='Pin a description'></textarea>
                </div>
              </div>

            </div>

            <div className='pin-form-submit'>
              <button> Pin It! :) </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PinForm;
