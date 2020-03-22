<template>
  <v-sheet class="overflow-hidden " style="position: relative;">
    <v-app class="green-container" light color="#442021">
      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item v-if="user">
          <v-list-item-avatar class="margin-right">
            <v-img :src="user['avatar_url']"></v-img>
          </v-list-item-avatar>
          <v-divider vertical="true"></v-divider>
          <v-list-item-content class="margin-left">
            <v-list-item-title>{{ user.login }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list dense>
          <v-list-item :key="Home" nuxt>
            <!-- <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title
                ><nuxt-link to="/">Home</nuxt-link></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="loggedIn" :key="Submit" nuxt>
            <!-- <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon> -->
            <v-list-item-content>
              <v-list-item-title
                ><nuxt-link to="/submit"
                  >Submit Joke</nuxt-link
                ></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-card color="#442021" flat tile>
        <v-toolbar short>
          <v-app-bar-nav-icon
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title>DEV JOKES</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn v-if="!loggedIn" small @click="login()"
            >Login <v-icon>mdi-login</v-icon></v-btn
          >
          <v-btn v-if="loggedIn" small @click="logout()"
            >Logout<v-icon>mdi-logout</v-icon></v-btn
          >
        </v-toolbar>
      </v-card>
      <v-content class="green-container">
        <nuxt />
      </v-content>
    </v-app>
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
  background-color: #a6e2d0;
}

.margin-right {
  margin-right: 10px;
}

.margin-left {
  margin-left: 10px;
}
</style>
