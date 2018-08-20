<template>
  <v-app>
    <div class="alert">
      <v-alert
        v-for="(notification, index) in notifications"
        :key="index"
        class="alert-content"
        :value="true"
        :type="notification.type"
        transition="scale-transition"
      >
        {{ notification.message }}
        <v-icon class="cancel" @click="deleteNotification(index)">cancel</v-icon>
      </v-alert>
    </div>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-title v-text="title" class="title"></v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="isAuthenticated" flat to="/">Home</v-btn>
        <v-btn v-if="isAuthenticated" flat to="/about">About</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="!isAuthenticated" flat to="/login">Login</v-btn>
        <v-btn v-if="!isAuthenticated" flat to="/signup">Sign Up</v-btn>
        <v-btn v-if="isAuthenticated" @click="logout" flat>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style scoped>
  .title {
    padding-right: 20px;
  }
  .alert {
    position: absolute;
    padding-top: 30px;
    margin: auto;
    left: 0;
    right: 0;
  }
  .alert-content {
    z-index: 999;
    width: fit-content;
  }
  .cancel {
    color: rgba(0,0,0,0.3);
    padding-left: 15px;
    cursor: pointer;
  }
</style>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'App',
  data() {
    return {
      clipped: true,
      title: 'RAFFLER',
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/isAuthenticated',
      notifications: 'notification/getNotifications',
    }),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    deleteNotification(index) {
      this.$store.dispatch('notification/delete', index)
    },
  },
}
</script>
