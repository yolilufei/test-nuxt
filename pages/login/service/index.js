import {request} from '@/plugins/request';

export const loginService = (data) => {
    return request({
        method: 'post',
        url: '/api/users/login',
        data,
    });
}

export const registerService = (data) => {
    return request({
        method: 'post',
        url: '/api/users',
        data,
    });
}