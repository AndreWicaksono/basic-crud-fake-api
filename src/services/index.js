import Get from './Get';
import Post from './Post';

const getBlogPost = (self, stateContainer) => {
    Get('posts').then((result) => {
        console.log(self);
        self.setState({
            [stateContainer]: result
        });
    });
}

const postArticle = (data) => Post('posts', data);

const API = {
    getBlogPost,
    postArticle
}

export default API;