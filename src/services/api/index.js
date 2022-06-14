import axios from 'axios';

axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0/';

export const API = {
    top: () => {
        return new Promise((resolve, reject) => {
            axios.get('/topstories.json')
            .then(
                res => {
                    resolve(res.data)
                },
                error => {
                    reject(error)
                })
        })
    },
    new: () => {
        return new Promise((resolve, reject) => {
            axios.get('/newstories.json')
            .then(
                res => {
                    resolve(res.data)
                },
                error => {
                    reject(error)
                })
        })
    },
    best: () => {
        return new Promise((resolve, reject) => {
            axios.get('/beststories.json')
            .then(
                res => {
                    resolve(res.data)
                },
                error => {
                    reject(error)
                })
        })
    },
    ask: () => {
        return new Promise((resolve, reject) => {
            axios.get('/askstories.json')
            .then(
                res => {
                    resolve(res.data)
                },
                error => {
                    reject(error)
                })
        })
    },
    job: () => {
        return new Promise((resolve, reject) => {
            axios.get('/jobstories.json')
            .then(
                res => {
                    resolve(res.data)
                },
                error => {
                    reject(error)
                })
        })
    },
    show: () => {
        return new Promise((resolve, reject) => {
            axios.get('/showstories.json')
            .then(
                res => {
                    resolve(res.data)
                },
                error => {
                    reject(error)
                })
        })
    },
    item: (id) => {
        return new Promise((resolve, reject) => {
            axios.get(`/item/${id}/.json`)
            .then(
                res => {
                    resolve(res.data)
                },
                error => {
                    reject(error)
                })
        })
    }
};
