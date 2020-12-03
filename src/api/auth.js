import { apiPost } from '../utils/api'


export const checkUserEmail = (data) => {
   return  apiPost(`checkemail`, data)
        .then(res => res)
        .catch(err => ({ 
            'message' : 'Account does not registered in our system.'
        }))
}

export const login = (data) => {
    return  apiPost(`auth/login`, data)
        .then(res => res)
        .catch(err => ({
            'message': 'Password does not match'
        }))
}

export const signup = (data) => {
    return  apiPost(`auth/signup`, data)
        .then(res => res)
        .catch(err => ({
            'message': 'User information is incomplete yet.'
        }))
}