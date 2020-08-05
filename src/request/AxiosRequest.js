import Axios from 'axios';

export const AxiosRequest = Axios.create({
    baseURL:"https://5e9ec500fb467500166c4658.mockapi.io/todos"
 });