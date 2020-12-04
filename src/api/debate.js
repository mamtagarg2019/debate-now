import { apiPost, apiGet } from '../utils/api'

export const scheduleDebate = (data) => {
   return apiPost(`debate/create`, data)
        .then(res => res)
        .catch(err => err)
       
}

export const getDebateFormats = () => {
    apiGet(`debate/listingDebatFormat`)
        .then(res => res)
        .catch(err => console.log(err, "err"))
}

