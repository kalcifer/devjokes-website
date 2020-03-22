<template>
  <v-card class="mx-auto mt-10" max-width="400" min-height="200" raised>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-col cols="12">
        <v-textarea v-model="jokeText" counter color="#f5aab4">
          <template v-slot:label>
            <div>Joke Text</div>
          </template>
        </v-textarea>
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
  data: () => ({
    valid: true,
    name: '',
    nameRules: [
      (v) => !!v || 'Name is required',
      (v) => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
