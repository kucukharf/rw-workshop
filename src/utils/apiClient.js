import fetch from 'isomorphic-fetch';
import config from '../config/config';

const get = function(url, callback, onError) {
	fetch(config.API_URL + url)
		.then(checkStatus)
		.then(callback, onError);
};

function checkStatus(response) {
	console.log(response.status);
	if (response.status >= 200 && response.status < 300 || response.status === 502) {
		return response.json();
	} 

	throw Error(response.statusText);
}

export default { get };
