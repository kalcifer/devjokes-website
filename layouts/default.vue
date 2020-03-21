<template>
  <v-sheet height="400" class="overflow-hidden" style="position: relative;">
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item v-if="user">
        <v-list-item-avatar>
          <v-img src="{{user.avatar_url}}"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.login }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item :key="Home" link>
          <!-- <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon> -->
          <v-list-item-content>
            <v-list-item-title
              ><nuxt-link to="/">Home</nuxt-link></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div>
      <button v-if="!loggedIn" @click="login">Login</button>
      <button v-if="loggedIn" @click="logout">Logout</button>
      <div>User {{ user }}</div>
      <v-btn color="pink" dark @click.stop="drawer = !drawer">
        Toggle
      </v-btn>
      <nuxt />
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      loggedIn: this.$auth.loggedIn,
      user: this.$auth.user
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('github')
    },
    logout() {
      this.$auth.logout()
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
</style>
