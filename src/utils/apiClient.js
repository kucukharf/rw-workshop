import fetch from 'isomorphic-fetch';
import config from '../config/config';

const get = function (url, callback, onError) {
  fetch(config.apiUrl + url)
    .then(checkStatus)
    .then(callback, onError);
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }
  throw Error(response.statusText);
}

export default { get };
