// import axios from 'axios';


// const axiosApi = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     "Access-Control-Allow-Origin": "*",
//   },
//   timeout: 120000,  
// });

// axiosApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem('accessToken');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// export default axiosApi;