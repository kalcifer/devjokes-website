<template>
  <div>
    <div align="center" class="accent--text my-12">
      You need to be logged in to submit new joke content
    </div>
    <v-card
      class="mx-auto mt-10"
      max-width="fit-content"
      border-color="accent"
      light
    >
      <v-btn v-if="!loggedIn" class="mx-auto" @click="login"
        >Login with github</v-btn
      >
      <v-btn v-if="loggedIn" nuxt text to="/submit">Go to Submit</v-btn>
    </v-card>
  </div>
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
