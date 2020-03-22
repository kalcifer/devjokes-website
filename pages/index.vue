<template>
  <v-card
    class="mx-auto mt-10"
    max-width="400"
    min-height="200"
    raised
    :loading="true"
    color="#f5aab4"
  >
    <v-card-text v-if="randomJoke" color="#442021">
      <div class="overline mb-4">Joke no:{{ randomJoke.id }}</div>
      <p class="headline mb-1">
        {{ randomJoke.text }}
      </p>
    </v-card-text>
    <template #progress> </template>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      randomJoke: {
        id: 20,
        text: 'HUge huge joke'
      },
      querySnapshot: null
    }
  },
  mounted() {
    // const db = this.$fireStore.collection('jokes')
    // db.get().then((querySnapshot) => {
    //   this.querySnapshot = querySnapshot
    // })
    // this.makeRandomJoke()
    // this.showRandomJoke()
  },
  methods: {
    makeRandomJoke() {
      if (this.querySnapshot) {
        const randomNo = Math.floor(
          Math.random() * Math.floor(this.querySnapshot.size)
        )
        const randomJoke = this.querySnapshot.docs[randomNo].data()
        this.randomJoke = randomJoke
      }
    },
    showRandomJoke() {
      setInterval(this.getRandomJoke, 20000)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
