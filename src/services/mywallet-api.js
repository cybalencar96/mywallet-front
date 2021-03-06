import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL || 'https://mywallet-carlos.herokuapp.com/';

const api = {
    signUp: (body => {
        return axios.post('/sign-up',body)
    }),

    signIn: (body) => {
        return axios.post('/sign-in',body)
    } ,

    logOut: (token) => {
        return axios.get('/log-out',setHeader(token))
    },

    getUserInfo: (token) => {
        return axios.get('/user',setHeader(token))
    } ,

    sendTransaction: (token,body) => {
        return axios.post(`/transactions`,body,setHeader(token))
    },

    getTransactions: (token) => {
        return axios.get(`/transactions`,setHeader(token))
    }
}

function setHeader(token) {
    return { headers: {
        Authorization: `Bearer ${token}`
    }}
}
export default api;