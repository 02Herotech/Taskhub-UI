// import { AxiosResponse } from 'axios';

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Create a custom Axios instance with default configuration
const customAxios = axios.create({
  baseURL: 'https://test.jacinthsolutions.com.au/', 
  timeout: 5000, 
  headers: {
    'Authorization': 'Bearer your_access_token', 
    'Content-Type': 'application/json',
  },
});

// You can also add interceptors for request and response
customAxios.interceptors.request.use(
  (config: any) => {
   
    return config;
  },
  (error: any) => {
    // Handle request error
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response: any) => {

    return response;
  },
  (error: any) => {
    // Handle response error
    return Promise.reject(error);
  }
);

export default customAxios;