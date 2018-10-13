const axios = require("axios");
const { baseUrl } = require("./settings.js");

const fetchFeeds = function (params) {
  return axios.post(baseUrl + "feed");
};

module.exports = {
    fetchFeeds
};