import axios from 'axios';

export const api = axios.create({
     baseURL: 'http://34.66.146.11/docemaison/developer/api/public/api/'
     // baseURL: 'https://localhost:3000'
});