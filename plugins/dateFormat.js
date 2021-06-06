import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('dateFormat', (v, format = 'YYYY-MM-DD HH:mm:ss') => {
    return dayjs(v).format(format);
})