<template>
  <v-card class="mx-auto mt-10" max-width="400" min-height="200" raised>
    <v-form v-if="success === false" ref="form" v-model="valid" lazy-validation>
      <v-col cols="12">
        <v-spacer></v-spacer>
        <v-textarea v-model="jokeText" color="#f5aab4" auto-grow rows="3">
          <template v-slot:label>
            <div>Joke Text</div>
          </template>
        </v-textarea>
        <v-text-field v-model="jokeImgUrl">
          <template v-slot:label>
            <div>Joke Img</div>
          </template>
        </v-text-field>
      </v-col>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-slide-x-reverse-transition>
          <v-tooltip v-if="formHasErrors" left>
            <template v-slot:activator="{ on }">
              <v-btn icon class="my-0" @click="resetForm" v-on="on">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Refresh form</span>
          </v-tooltip>
        </v-slide-x-reverse-transition>
        <v-btn color="#442021" text @click="submit">Submit</v-btn>
      </v-card-actions>
    </v-form>
    <v-snackbar v-model="success" :top="true" color="success">
      You're submission is successful. Pls wait for approval
      <v-btn dark text @click="success = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-snackbar v-model="error" :top="true" color="error">
      {{ errorText }}
      <v-btn dark text @click="error = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  middleware: 'auth',
  data: () => ({
    success: false,
    error: false,
    errorText: ''
  }),
  methods: {
    async submit() {
      const currentData = localStorage.getItem('allData')
      this.success = false
      try {
        const actualData = JSON.parse(currentData)

        const newDoc = this.$fireStore
          .collection('jokes')
          .doc(`joke${actualData.length}`)
        const newJoke = {
          text: this.jokeText,
          img: this.jokeImgUrl,
          username: this.$auth.user.id,
          approved: false
        }
        localStorage.clear()
        await newDoc.set(newJoke)
      } catch (e) {
        this.error = true
        this.errorText = e
      }
      this.success = true
      setTimeout(() => this.$router.push('/'), 500)
    }
    // validate() {
    //   this.$refs.form.validate()
    // },
    // reset() {
    //   this.$refs.form.reset()
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation()
    // }
  }
}
</script>
