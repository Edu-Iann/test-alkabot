import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response.data;
};

export const getPostComments = async (postId) => {
  const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const getUserDetails = async (userId) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response.data;
};
