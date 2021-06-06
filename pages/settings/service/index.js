import request from '@/plugins/request';

export const updateProfileService = (data = {}) => {
    return request({
        method: 'put',
        url: '/api/user',
        data,
    });
}
