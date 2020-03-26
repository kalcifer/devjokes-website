<template>
  <v-card class="mx-auto mt-10" max-width="400" min-height="200" raised>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-col cols="12">
        <v-spacer></v-spacer>
        <v-textarea v-model="jokeText" color="#f5aab4" auto-grow>
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
  </v-card>
</template>

<script>
export default {
  middleware: 'auth',

  methods: {
    async submit() {
      const currentData = localStorage.getItem('allData')
      const newDoc = this.$fireStore
        .collection('jokes')
        .doc(`joke${currentData.length}`)
      try {
        await newDoc.set({
          text: this.jokeText
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
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
