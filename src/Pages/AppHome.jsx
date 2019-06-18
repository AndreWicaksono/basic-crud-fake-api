import React, { Component, Fragment } from 'react';
import axios from 'axios';
import API from '../services/';

import ShowModal from '../Components/Modal/ShowModal';
import NavBar from '../Components/NavBar/NavBar'
import PostCard from '../Components/Card/PostCard';

class App extends Component {
  state = {
      posts: [],
      formBlogPost: {
        id: -1,
        title: '',
        author: '',
        content: ''
      }
    }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  // getPostAPI = () => {
  //   API.getBlogPost().then(result => {
  //     this.setState({
  //       posts: result
  //     });
  //   });
  // }

  handleRemove = (postID) => {
    axios.delete(`http://localhost:3002/posts/${postID}`)
    .then(() => {
      // this.getPostAPI();
      API.getBlogPost(this, 'posts')  
    })
  }

  componentDidMount() {
    // this.getPostAPI();
    API.getBlogPost(this, 'posts')
  }

  render() {
    return (
        <Fragment>
          <header>
            <NavBar/>
          </header>
          <div className="section-content container py-3">
            <ShowModal refreshPost={() => API.getBlogPost(this, 'posts')} isOpen={this.state.modal} buttonWidth="8rem" buttonLabel="New Post"/>
              
            {
              this.state.posts.reverse().map(post => {
                return <PostCard key={post.id} data={post} refreshPost={() => API.getBlogPost(this, 'posts')} remove={this.handleRemove} />
              })
            }
          </div>

        </Fragment>
    );
  }
}

export default App;