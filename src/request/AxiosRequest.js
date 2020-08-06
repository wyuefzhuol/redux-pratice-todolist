import Axios from 'axios';
import store from '../store';
import { LOADING_TOGGLE } from '../action/actionTypes';

const AxiosRequest = Axios.create({
    baseURL:"http://localhost:8090/todos"
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

