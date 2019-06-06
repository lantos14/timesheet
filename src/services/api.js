/**
 * chained promise function, which responsible for sending a GET request to the provided url,
 * then parse the response into json
 * @param {string} url - the url of the API endpoint needed to be called
 * @returns {object} response from the url
 */
export function getData(url) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}
/**
 * chained promise function, which responsible for sending a POST request to the provided url,
 * then parse the response to json
 * @param {string} url - the url of the API endpoint needed to be called
 * @param {object} data - the data, that must be sent in the query's body
 */
export function postData(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch((error) => {
      throw error;
    });
}
