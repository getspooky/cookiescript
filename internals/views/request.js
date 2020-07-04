/*
 * This file is part of the react-boilerplate project.
 *
 * Copyright (c) 2019 Maximilian Stoiber
 */

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const {
    errors,
  } = await response.json();
  // Here you can add additional information.
  throw new TypeError(errors.message);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const settings = {
    // *default, no-cache, reload, force-cache, only-if-cached
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    ...options,
  }
  return fetch(url, settings)
    .then(checkStatus)
    .then(parseJSON);
}
