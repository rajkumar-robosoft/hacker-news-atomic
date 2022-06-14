import axios from 'axios';
import Type from './constants'

axios.defaults.baseURL = 'https://hacker-news.firebaseio.com/v0/';

export const API = {
    top: () => {
        return new Promise((resolve, reject) => {
            axios.get(Type.top)
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
            axios.get(Type.new)
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
            axios.get(Type.best)
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
            axios.get(Type.ask)
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
            axios.get(Type.job)
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
            axios.get(Type.show)
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
