import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 100000
});

export const getAllProducts = () =>
  new Promise((resolve, reject) => {
    axiosInstance.get('/getAllProducts')
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });

export const addProduct = (newProdcut) => {
  return axiosInstance.post('/addProduct', newProduct);
};
