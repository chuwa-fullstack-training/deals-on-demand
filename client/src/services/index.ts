import axios, { AxiosResponse } from 'axios';
const apiUrl = 'http://localhost:8080/hiring';

interface VisaResponse {
    id: number;
    name: string;
  }

export function getSearchProducts(): Promise<VisaResponse[]> {
  return new Promise((resolve, reject) => {
    axios
      .get<AxiosResponse<VisaResponse[]>>(`${apiUrl}/Inprogress`, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
}
