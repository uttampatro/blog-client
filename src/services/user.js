const axios = require('axios');
const { baseUrl } = require("./settings.js");

const sendResetLink = function (params) {
    return axios.post(baseUrl + '/sendResetLink', params);
}

const updatePassword = function (params) {
    return axios.post(baseUrl + '/updatePassword', params);
}

const fetchUserDetails = function (params) {
    return axios.post(baseUrl + '/getUserById', params);
}

const updateUserById = function (params) {
    return axios.post(baseUrl + '/updateUserById', params);
}

module.exports = {
    fetchUserDetails,
}