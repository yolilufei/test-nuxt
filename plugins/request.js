import axios from 'axios';
axios.defaults.withCredentials = true;
export const request = axios.create({
    baseURL: 'https://conduit.productionready.io',

})


export default ({ store }) => {
    request.interceptors.request.use(function (config) {
        const { user } = store.state;
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`;
        }
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
}