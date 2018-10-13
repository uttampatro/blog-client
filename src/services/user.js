const axios = require('axios');
const { baseUrl } = require("./settings.js");

const fetchUserDetails = function (params) {
    return axios.post(baseUrl + 'getUserDetails', params);
}

module.exports = {
    fetchUserDetails,
}