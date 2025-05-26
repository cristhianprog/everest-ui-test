import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://everest-interview-public-files.s3.amazonaws.com/',
});