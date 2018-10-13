const axios = require('axios');
const { baseUrl } = require("./settings.js");

const authenticateUser = function (params) {
    return axios(baseUrl + 'login', {
        method: "post",
        data: params,
        withCredentials: true
    });
    // return axios.post(, params);
}

const registerUser = function (params) {
    return axios.post(baseUrl + 'signup', params);
}

const logout = function () {
    return axios.post(baseUrl + 'logout');
}

const createNewPass = function (params) {
    return axios.post(baseUrl + 'updatePassword', params);
}

const sendResetPassLink = function (params) {
    return axios.post(baseUrl + 'sendResetLink', params);
}


module.exports = {
    authenticateUser,
    registerUser,
    logout,
    createNewPass,
    sendResetPassLink
}