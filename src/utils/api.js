import axios from 'axios';
import {  
    API_URL
} from './constants';

import moment from 'moment'

/**
 * Pass number to convert to decimal
 * @params
 * places number of decimal places after the number
 * no number to convert
*/

export const convertDateToLong = (date) => {
	return parseInt(moment(date).format('x'), 10)
}

export function toDecimal(no, places) {
	return parseFloat(Math.round(no * 100) / 100).toFixed(places);
}

export function valid_after(current,yesterday){
	if (current && current.isAfter && yesterday) {
		return current.isAfter(yesterday)
	}
	return false
}

export function valid_before(current,next){
	if (current && current.isBefore && next) {
		return current.isBefore(next);
	}
	return false
};

export function logOut () {
	return new Promise ((res, rej) => {
		saveObject('session', {});
		localStorage.removeItem('session');
		localStorage.removeItem('cart.session.id');
		res(true);
	})
}

export function isLoggedIn() {
	let session = getObject('session');

	let token = session && session.accessToken;

	return session && session.accessToken;
}

export function getHeaders () {
	let session = getObject('session');
	return {
		authorization: session && session.accessToken || null
	}
}

export function mockApi (dispatch, payload, time) {
	return setTimeout(() => dispatch(payload), time)
}


export function saveObject (key, value) {
	if(window && window.localStorage) {
		window.localStorage.saveObject(key, value);
	}
}

export function getObject(key) {
	if(window && window.localStorage) {
		return window.localStorage.getObject(key);
	}

	return null;
}

export function generateUrl (path) {
	return API_URL + path + '?api_key=' + apiKey;
}

export function apiReq (endPoint, data, method, headers, config) {
  return new Promise ((res, rej) => {

  	headers = {
  		...getHeaders(),
		...headers
  	}

  	if(method == 'get') {
  		data = {
  			params: data,
  			headers,
  			...config
  		}
  	}

  	axios[method](endPoint, data, {...config, headers}).then((result) => {
	  let {data} = result;
	  return res(data)
	}).catch((err) => {
	  return rej(err);
	});
  })
}

export function apiPost (endPoint, data, headers = {}, config = {}) {
  return apiReq(generateUrl(endPoint), data, 'post', headers, config);
}

export function apiDelete (endPoint, data, headers = {}, config = {}) {
  return apiReq(generateUrl(endPoint), data, 'delete', headers, config);
}

export function apiGet (endPoint, data, headers = {}, config = {}) {
  return apiReq(generateUrl(endPoint), data, 'get', headers, config);
}

export function apiPut (endPoint, data, headers = {}, config = {}) {
  return apiReq(generateUrl(endPoint), data, 'put', headers, config);
}


export function validateFormat (dob, format) {
	
	let format_check = moment(dob, format, true).isValid()
    
    if(!format_check){
      return 'Please enter a valid date.';
	}
		
    return false;
}

export function validateDob (dob) {
	let err = validateFormat(dob, 'MM/DD/YYYY');
    if(err){
      return err;
    }
    if(moment(dob) >= moment()) {
      return 'Date of Birth cannot be greater than the current date';
    }
    return false;

}
export function validateStrAsDate (date){
	let err = validateFormat(date, 'mm-dd-yyyy')
	if(err){
		return err 
	}

	let err2 = validateFormat(date, 'MM/DD/YYYY')
	if(err2){
		return err2
	}
	return false
}

export function validatExp (dob) {
	
	let err = validateFormat(dob, 'MM/DD/YYYY');
    
    if(err){
      return err;
    }
    if(dob < moment()){
      return 'Expiration Date cannot be smaller than the current date';
    }

    return false;

}


