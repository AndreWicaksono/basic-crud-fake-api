import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import API from '../../services';

class ShowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formBlogPost: {
        id: -1,
        title: '',
        author: '',
        content: ''
      },
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    // If it's a new post task, reset the post state that will make the input clear
    if(this.checkTask()) {
      this.resetPostState();
    } else {
      this.fillPostState();
    }
  }

  handleFormChange = (event) => {
    let formBlogPostTemp = {...this.state.formBlogPost};

    // If it's a new post task, create a unique ID based on timestamp
    if (this.checkTask()) {
      let timeStamp = new Date().getTime();
  
      formBlogPostTemp['id'] = timeStamp;
    }
    
    formBlogPostTemp[event.target.name] = event.target.value;

    this.setState({
      formBlogPost: formBlogPostTemp
    });

  }

  handleSubmit = () => {
    if (this.checkTask()) {
      this.postDataToAPI();
    } else {
      this.updateDatatoAPI();
    }
  }

  // Submit data to API
  postDataToAPI = () => {
    API.postArticle(this.state.formBlogPost).then(() => {
      this.props.refreshPost();
      this.toggle();
    });
  }

  // Update data to API
  updateDatatoAPI = () => {
    axios.put(`http://localhost:3002/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
    .then(() => {
      this.props.refreshPost();
      this.toggle();
    });
  }

  // Function that will fill post's state with retrieved value from props
  fillPostState = () => {
    this.setState({
      formBlogPost: {
        id: this.props.postID,
        title: this.props.windowTitle,
        author: this.props.windowAuthor,
        content: this.props.windowBody
      }
    });
  }

  // Reset post's state function
  resetPostState = () => {
    this.setState({
      formBlogPost: {
        id: -1,
        title: '',
        author: '',
        content: ''
      }
    });
  }

  // Check if it's a new post task
  checkTask = () => {
    if (this.props.buttonLabel === 'Edit') {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Fragment>
        <Button
          style={{width: this.props.buttonWidth}}
          color="success"
          onClick={this.toggle}>
            {this.props.buttonLabel}
        </Button>
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            <label htmlFor="title">Title</label>
            <input id="title" className="w-100 pl-1" type="text" name='title' onChange={this.handleFormChange} value={this.state.formBlogPost.title || ''} />
          </ModalHeader>
          <ModalBody>
            <label htmlFor="author">Author</label>
            <input id="author" className="w-100 pl-1" type="text" name='author' onChange={this.handleFormChange} value={this.state.formBlogPost.author || ''} />
            
            <label className="mt-3" htmlFor="content">Content</label>
            <textarea id="content" className="w-100" style={{height: '10rem'}} name='content' onChange={this.handleFormChange} value={this.state.formBlogPost.content || ''}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ShowModal;