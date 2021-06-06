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