import axios from 'axios';
axios.defaults.baseURL = 'http://api.mcweb.club/box/';
export default {
    get (url, data) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: data
            }).then(response => {
                resolve(response.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post (url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url,
                data
            ).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }
};