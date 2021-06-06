import { request } from '@/plugins/request';

export const queryArticlesService = (params = {}) => {
    return request({
        method: 'get',
        url: '/api/articles',
        params,
    });
}

export const queryFeedArticlesService = (params = {}) => {
    return request({
        method: 'get',
        url: '/api/articles/feed',
        params,
    });
}

export const queryTagsService = () => {
    return request({
        method: 'get',
        url: '/api/tags',
    });
}

export const addFavoriteService = slug => {
    return request({
        method: 'post',
        url: `/api/articles/${slug}/favorite`
    })
}

export const unFavoriteService = slug => {
    return request({
        method: 'delete',
        url: `/api/articles/${slug}/favorite`
    })
}
