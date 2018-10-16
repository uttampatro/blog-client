const axios = require("axios");
const { baseUrl } = require("./settings.js");

const fetchFeeds = function (params) {
  return axios.post(baseUrl + "/getAllArticles", params);
};

const createArticle = function (params) {
  return axios.post(baseUrl + "/createArticle", params);
};

const updateArtcile = function (params) {
  return axios.post(baseUrl + "/updateArticle", params);
};

const deleteArtcile = function (params) {
  return axios.post(baseUrl + "/deleteArticle", params);
};

const deleteAllArticle = function (params) {
  return axios.post(baseUrl + "/deleteAllArticles", params);
};


module.exports = {
    fetchFeeds,
    createArticle
};