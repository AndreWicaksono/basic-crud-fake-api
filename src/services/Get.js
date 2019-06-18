import axios from 'axios';
import { pathURL } from './config';

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${pathURL}/${path}`)
        .then((result) => {
            resolve(result.data);
        }, (err) => {
            reject(err);
        });
    });

    return promise;
}

export default Get;