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
export { getDiscountProductsBycatalog, getDiscountProducts };
