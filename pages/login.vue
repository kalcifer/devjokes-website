<template>
  <v-card
    class="mx-auto mt-10"
    max-width="fit-content"
    border-color="accent"
    light
    ><v-btn class="mx-auto" @click="login">Login with github</v-btn>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: this.$auth.loggedIn
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('github')
    }
  }
}
</script>
