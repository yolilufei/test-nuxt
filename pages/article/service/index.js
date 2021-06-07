import {request} from '@/plugins/request';

export const queryArticleDetailService = slug => {
    return request({
        method: 'get',
        url: `/api/articles/${slug}`
    })
}

export const queryArticleCommentService = slug => {
    return request({
        method: 'get',
        url: `/api/articles/${slug}/comments`
    })
}

export const postCommentService = (slug, data) => {
    return request({
        method: 'post',
        url: `/api/articles/${slug}/comments`,
        data
    })
}