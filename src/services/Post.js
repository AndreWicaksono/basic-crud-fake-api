import axios from 'axios';
import { pathURL } from './config';

const Post = (path, dataToPost) => {
    const promise = new Promise((resolve, reject) => {
        axios.post(`${pathURL}/${path}`, dataToPost).then((result) => {
            resolve(result);
        }, (err) => {
            reject(err);
        });
    });

    return promise;
}

export default Post;