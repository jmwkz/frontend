<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title>
              <div class="center block">
                <h1>Login</h1>
                <v-icon size="150px">account_circle</v-icon>
              </div>
              <div class="center block">
                <v-form>
                  <v-text-field
                    v-model="username"
                    label="Username"
                    required
                  ></v-text-field>
                  <v-text-field
                    type="password"
                    v-model="password"
                    label="Password"
                    required
                  ></v-text-field>
                </v-form>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat @click="login" :disabled="!valid">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .center {
    margin: auto;
    text-align: center;
  }
  .block {
    display: block;
    width: 100%;
  }
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'login',
  data: () => ({
    username: '',
    password: '',
  }),
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      loading: 'auth/loading',
    }),
    valid() {
      return !!this.username && !!this.password
    },
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        username: this.username,
        password: this.password,
      })
    },
  },
}
</script>
