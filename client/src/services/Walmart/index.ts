import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const getDiscountProductsBycatalog = async (cIId: string) => {
  // const url = 'http://localhost:5001/walmart/getDiscountsByCatalog/' + cIId;
  // const options = { method: 'GET' };
  // const response = await fetch(url, options);
  // return response.json()
  const response = await axios({
    url: 'http://localhost:5001/walmart/getDiscountsByCatalog/' + cIId,
    method: 'GET'
  });
  return response.data;
};

const getDiscountProducts = async () => {
  // const url = 'http://localhost:5001/walmart/getDiscounts/';
  // const options = { method: 'GET' };
  // const response = await fetch(url, options);
  // return response.json();
  const response = await axios({
    url: 'http://localhost:5001/walmart/getDiscounts/',
    method: 'GET'
  });
  return response.data;
};

const getProductsBySearch = async (searchValue: string) => {
  const response = await axios({
    url: `http://localhost:5001/walmart/search/${searchValue}`,
    method: 'GET'
  });
  return response.data;
};

export {
  getDiscountProductsBycatalog,
  getDiscountProducts,
  getProductsBySearch
};

export const walmartApi = createApi({
  reducerPath: 'walmartApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL || 'http://localhost:5001'
  }),
  keepUnusedDataFor: 30,
  endpoints: builder => ({
    getWalmartData: builder.query({
      query: () => 'walmart/getDiscounts/'
    }),
    getWalmartDataByCatalog: builder.query({
      query: (cIId: string) => `walmart/getDiscountsByCatalog/${cIId}`
    }),
    getProductsBySearch: builder.query({
      query: (searchValue: string) => `walmart/search/${searchValue}`
    })
  })
});

export const {
  useGetWalmartDataQuery,
  useGetWalmartDataByCatalogQuery,
  useGetProductsBySearchQuery
} = walmartApi;
