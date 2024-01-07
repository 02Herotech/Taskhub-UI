// import { AxiosResponse } from 'axios';

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Create a custom Axios instance with default configuration
const customAxios = axios.create({
  baseURL: 'http://54.198.113.229:8080', 
  timeout: 5000, 
  headers: {
    'Authorization': 'Bearer your_access_token', // Set default headers
    'Content-Type': 'application/json',
  },
});

// You can also add interceptors for request and response
customAxios.interceptors.request.use(
  (config: any) => {
    // Modify the request configuration before it is sent
    // For example, you can add authentication headers, logging, etc.
    return config;
  },
  (error: any) => {
    // Handle request error
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response: any) => {
    // Modify the response data before it is returned
    // For example, you can handle common errors or modify the data structure
    return response;
  },
  (error: any) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default customAxios;