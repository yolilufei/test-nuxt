export const state = () => {
  return {
    user: null,
  };
};

export const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  clearUser(state) {
    state.user = null;
  },
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    const cookie = req?.headers?.cookie;
    const cookieParser = process.server ? require("cookieparser") : undefined;
    if (cookie) {
      try {
        const user = cookieParser.parse(cookie);
        const auth = JSON.parse(user.auth);
        commit("setUser", auth);
      } catch (err) {
        console.log(err);
      }
    }
  },
};
