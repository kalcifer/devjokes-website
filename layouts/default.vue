<template>
  <v-sheet class="overflow-hidden " style="position: relative;">
    <v-app class="green-container" light>
      <v-content class="green-container">
        <v-toolbar short>
          <v-toolbar-title
            ><nuxt-link to="/" class="font-family">
              DEV JOKES</nuxt-link
            ></v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn nuxt class="ma-2" title tile text to="/submit" v-bind="size"
            >Submit joke</v-btn
          >
          <v-btn nuxt class="ma-2" title tile text to="/about" v-bind="size"
            >About</v-btn
          >
          <v-btn v-if="loggedIn" class="ma-2" title tile text @click="logout"
            >Logout</v-btn
          >
        </v-toolbar>
        <nuxt />
      </v-content>
    </v-app>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: this.$auth.loggedIn,
      user: this.$auth.user
    }
  },
  computed: {
    size() {
      const size = { xs: 'x-small', sm: 'small', lg: 'large', xl: 'x-large' }[
        this.$vuetify.breakpoint.name
      ]
      return size ? { [size]: true } : {}
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('github')
    },
    logout() {
      this.$auth.logout()
      window.location.reload(true)
    }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.font-family {
  font-family: 'VT323', monospace;
  font-size: 5vw !important;
  color: #424242;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.green-container {
  background-color: #1b262c;
}

.margin-right {
  margin-right: 10px;
}

.margin-left {
  margin-left: 10px;
}
</style>
