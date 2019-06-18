import React, { Component, Fragment } from 'react';
import axios from 'axios';

import NavBar from '../../Components/NavBar/NavBar';
import PostCard from '../../Components/Card/PostCard';

class Content extends Component {
    state = {
        author: '',
        content: '',
        title: ''
    };
    
    componentDidMount() {
        let postID = this.props.match.params.id;

        axios.get(`http://localhost:3002/posts/${postID}`)
            .then(result => {
                this.setState({
                    author: result.data.author,
                    content: result.data.content,
                    title: result.data.title
                })
            })
    }

    render() {
        return (
            <Fragment>
                <header>
                    <NavBar/>
                </header>
                <div className="container">
                    <PostCard data={this.state} />
                </div>
            </Fragment>
        )
    }
}

export default Content;