<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="form.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="form.username"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="form.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  v-model="form.email"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="form.password"
                  required
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" @click="updateUser">
                Update Settings
              </button>
              <hr />
              <button class="btn btn-outline-danger" @click="logout" v-if="user">
                Or click here to logout.
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { updateProfileService } from './service';
export default {
  name: "Settings",
  middleware: ["authenticated"],
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      form: { }
    }
  },
  mounted() {
    this.form = {
      ...this.user
    };
  },
  methods: {
    logout() {
      this.$store.commit('clearUser');
      this.$router.push('/');
    },
    async updateUser() {
      const { data } = await updateProfileService(this.form);
      this.$store.commit("setUser", data.user);
    }
  }
};
</script>
