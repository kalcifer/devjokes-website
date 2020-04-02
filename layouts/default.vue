<template>
  <v-sheet color="primary" light>
    <v-container fill-height fluid>
      <GithubCorner
        corner-color="#001858"
        git-color="#fef6e4"
        url="https://github.com/kalcifer/devjokes-website"
      ></GithubCorner>
      <v-app align="center" justify="center" max-width="600">
        <v-content>
          <div class="font-family font-weight-black primary--text">
            DEV JOKES
          </div>
          <div>
            <v-btn nuxt class="ma-2" title tile text to="/" v-bind="size"
              >Home</v-btn
            >
            <v-btn nuxt class="ma-2" title tile text to="/submit" v-bind="size"
              >Submit joke</v-btn
            >
            <v-btn nuxt class="ma-2" title tile text to="/about" v-bind="size"
              >About</v-btn
            >
            <v-btn v-if="loggedIn" class="ma-2" title tile text @click="logout"
              >Logout</v-btn
            >
          </div>
          <nuxt />
        </v-content>
      </v-app>
    </v-container>
  </v-sheet>
</template>

<script>
import GithubCorner from 'vue-github-corners'
export default {
  components: {
    GithubCorner
  },
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
  font-family: 'VT323', monospace !important;
  font-size: 13vw;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.v-btn--active:before {
  color: #f582ae;
}

.v-btn:hover::before {
  color: #f582ae;
}
.link-button:active {
  background-color: 'secondary' !important;
}
</style>
