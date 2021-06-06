<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign in" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>

          <ul class="error-messages">
            <template v-for="(v, k) in errors">
              <li v-for="(validMsg, index) in v" :key="index">
                {{ k }} {{ validMsg }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="login">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                required
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ isLogin ? "Sign in" : "Sign up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { loginService, registerService } from "./service";
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  name: "Login",
  middleware: ["unAuthenticated"],
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {},
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    async login() {
      const params = this.isLogin
        ? {
            email: this.user.email,
            password: this.user.password,
          }
        : this.user;
      const methodName = this.isLogin ? loginService : registerService;
      try {
        const { data } = await methodName({
          user: params,
        });
        const { user } = data;
        if (process.client) {
          Cookie.set("auth", user);
        }
        this.$store.commit("setUser", user);
        this.$router.push("/");
      } catch (err) {
        console.error(err);
        this.errors = err?.response?.data?.errors;
      }
    },
  },
};
</script>
