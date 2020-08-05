import Axios from 'axios';
import store from '../store';
import { LOADING_TOGGLE } from '../action/actionTypes';

const AxiosRequest = Axios.create({
    baseURL:"https://5e9ec500fb467500166c4658.mockapi.io/todos"
 });

AxiosRequest.interceptors.request.use(req => {
    store.dispatch({ type: LOADING_TOGGLE, payload: { loading: true } });
    return req;
}, error => error);


AxiosRequest.interceptors.response.use(req => {
    store.dispatch({ type: LOADING_TOGGLE, payload: { loading: false} });
    return req;
}, error => error);

export default AxiosRequest;

