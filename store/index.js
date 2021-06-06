export const state = () => {
    return {
        user: null,
        accessToken: ''
    }
}

export const mutations = {
    setUser(state, user) {
        state.user = user;
        state.accessToken = user.token;
    },
    setToken(state, token) {
        state.accessToken = token;
    },
    clearUser(state) {
        state.user = null;
        state.accessToken = '';
    }
}

export const actions = {
    nuxtServerInit({commit}, { req }) {
        const cookie = req?.headers?.cookie;
        const cookieParser = process.server ? require('cookieparser') : undefined;
        if (cookie) {
            try {
                const user = cookieParser.parse(cookie);
                const auth = JSON.parse(user.auth);
                commit('setToken', auth);
            } catch(err){
                console.log(err);
            }
        }
    }
}