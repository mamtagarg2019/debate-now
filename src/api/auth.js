import { apiPost } from '../utils/api'


export const checkUserEmail = (data) => {
   return  apiPost(`checkemail`, data)
        .then(res => res)
        .catch(err => err)
}

export const login = (data) => {
    return  apiPost(`auth/login`, data)
        .then(res => res)
        .catch(err => err)
}

export const signup = (data) => {
    return  apiPost(`auth/signup`, data)
        .then(res => res)
        .catch(err => err)
}